# _*_ coding: utf-8 _*_

from box import geobox, db
from flask import Flask, request, redirect, url_for, render_template
from uuid import uuid4
from datetime import datetime
import os,re,json,pickle,ConfigParser,threading

from box.model.gb_file_do import GbFile,GbFileSchema
from box.model.gb_file_raster_do import GbFileRaster,GbFileRasterSchema
from box.model.gb_file_vector_do import GbFileVector,GbFileVectorSchema

from box.gdal.gdal_helper import calcShpBbox,calcTiffBbox

'''上传文件
todo: 重复文件提示，利用消息系统分离提取元信息和边界的线程
'''
@geobox.route("/file/upload", methods=["POST"])
def upload_route():
    # 从配置文件获取文件存储路径
    cf = ConfigParser.ConfigParser()
    # cf.read('test.conf')
    cf.readfp(open('application.conf'))
    boxfile_base_dir=cf.get('file_server','file_dir')
    # print boxfile_base_dir

    #formItems类型是list，转为dict方便取值
    form = request.form
    formItems=form.items()
    uploadDict={}
    for i,el in enumerate(formItems):
        uploadDict[el[0]] = el[1]
    print uploadDict

    fInfoList = uploadDict['fileInfoList'];
    # print type(fInfoList)
    fInfoListJson = json.loads(fInfoList)
    # print type(fInfoListJson)
    # print type(fInfoListJson[0])
    # print  fInfoListJson[0]['size']
    # print  type(fInfoListJson[0]['size'])

    # 创建本次上传id，作为文件存储目录id
    uploadKey = str(uuid4()).replace('-','')
    # print upload_key

    # 创建文件存储真实文件夹，默认全部存储在第二层文件夹
    fileRealFolder = '/{rootDir}/{fileDir}'.format(rootDir=uploadDict['user_id'],fileDir=uploadKey)
    targetPath = boxfile_base_dir+fileRealFolder
    # print targetPath
    os.makedirs(targetPath)

    fileLists = request.files.getlist("file");
    # print len(fileLists)
    gbFileLists = []
    for index,upload in enumerate(fileLists):
        fileId =str(uuid4()).replace('-','')
        filename = upload.filename.rsplit("/")[0]
        print u'=====文件名是'+filename
        destination = "/".join([targetPath, filename])
        print "保存文件", destination
        upload.save(destination)
        dirId = uploadDict['file_dir_id']
        fileSize=fInfoListJson[index]['size']
        fileTag=uploadDict['file_tag']
        updateDate=fInfoListJson[index]['modifiedDate']
        uploadBy=uploadDict['upload_by']
        fileNotes=fInfoListJson[index]['type']
        userId=uploadDict['user_id']
        uploadBy=uploadDict['upload_by']
        uploadDateTime = datetime.strptime(uploadDict['upload_date'],'%Y-%m-%d %H:%M:%S')

        # 用户及文件上传信息插入mysql
        gbFile = GbFile(
            file_id = fileId,
            file_display_name = filename,
            file_real_name = filename,
            dir_id = dirId,
            file_real_location = uploadKey,
            file_type_id = 'type016',
            file_size =  fileSize,
            file_suffix =  upload.filename.rsplit('.')[-1],
            file_tag = fileTag,
            is_public = 0,
            create_date = None,
            create_by = None,
            update_date = updateDate,
            update_by = uploadBy,
            file_hashcode = None,
            notes = fileNotes,
            user_id =userId,
            is_deleted = 0,
            upload_by = uploadBy,
            upload_date = uploadDateTime,
            is_starred = 0
        )
        # print gbFile
        gbFileLists.append(gbFile)

        # tif影像范围读取入库，es建索引
        tiffReg = re.compile('tif')
        if  tiffReg.search(uploadDict['file_tag']) or tiffReg.search(filename):
            tiffBbox = calcTiffBbox(destination)
            print tiffBbox
            # print type(tiffBbox)

            bboxStr=''
            for coord in tiffBbox:
                for coor in coord:
                    bboxStr += str(coor)+','
            bboxStr=bboxStr[0:(len(bboxStr)-1)]
            print bboxStr

            gbFileTiff = GbFileRaster(
                 file_id=fileId,
                 file_type_id='type016',
                 img_resolution=None,
                 notes=fileNotes,
                 raster_extent=bboxStr,
                 create_by=None,
                 create_date=None,
                 update_by=uploadBy,
                 update_date=updateDate
            )
            db.session.add(gbFileTiff)
            print 'tiff范围提取'
            
        shpReg = re.compile('shp')
        if shpReg.search(filename) or shpReg.search(uploadDict['file_tag']):
            print 'shp范围提取'

    for f in gbFileLists:
        db.session.add(f)



    db.session.commit()


    return '上传完成'
