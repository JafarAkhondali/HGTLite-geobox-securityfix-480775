# _*_ coding: utf-8 _*_

from box import geobox, db
from flask import Flask, request, redirect, url_for, render_template
from uuid import uuid4
from datetime import datetime
import os
import json
import ConfigParser

from box.model.gb_file_do import GbFile,GbFileSchema

@geobox.route("/file/upload", methods=["POST"])
def upload():
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
    for upload in fileLists:
        filename = upload.filename.rsplit("/")[0]
        destination = "/".join([targetPath, filename])
        # print "Accept incoming file:", filename
        # print "Save it to:", destination
        upload.save(destination)
        gbFile = GbFile(
            file_id = str(uuid4()),
            file_display_name = filename,
            file_real_name = filename,
            dir_id = uploadDict['file_dir_id'],
            file_real_location = uploadKey,
            file_type_id = 'type016',
            file_size = 1024,
            file_suffix =  upload.filename.rsplit('.')[-1],
            file_tag = uploadDict['file_tag'],
            is_public = 0,
            create_date = None,
            create_by = None,
            update_date = None,
            update_by = None,
            file_hashcode = None,
            notes = '',
            user_id =None,
            is_deleted = 0,
            upload_by = uploadDict['user_id'],
            upload_date = datetime.strptime(uploadDict['upload_date'],'%Y-%m-%d %H:%M:%S'  ),
            is_starred = 0
        )
        print gbFile
        gbFileLists.append(gbFile)

    for f in gbFileLists:
        db.session.add(f)

    db.session.commit()

    return '上传完成'
