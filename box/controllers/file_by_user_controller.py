# _*_ coding: utf-8 _*_
from flask import jsonify,request
from datetime import datetime
from sqlalchemy import text
from pypinyin import lazy_pinyin

from box.constant.version import pyconst
from box.common.sorting import sort_chinese_list
from box.common.char_type import is_chinese

from box import geobox, db
from box.model.gb_file_do import GbFile, GbFileSchema
from box.model.gb_file_dir_do import GbFileDir, GbFileDirSchema
from box.domain.file_list_dto import FileList,FileListSchema
from box.common.nice_file_size import get_size_nice_str
_BASE_URL = '/files'

# '''根据用户名和当前目录获取子目录和文件，不分页'''
# @geobox.route('/'+pyconst.VERSION +_BASE_URL + '/<user_id>/<dir_id>/all')
# @geobox.route(_BASE_URL + '/<user_id>/<dir_id>/all/<page_num>/<page_size>')
# def list_all_by_user_dir(user_id,dir_id,page_num=1,page_size=8):
def list_all_by_user_dir(user_id,dir_id):
    print user_id, dir_id
    # 结果占位
    resultList = []

    # 获取用户根目录文件夹
    filters4Dir = {
        GbFileDir.user_id == user_id,
        GbFileDir.parent_id == dir_id,
        GbFileDir.is_deleted == 0
    }
    dirRecords = GbFileDir.query.filter(*filters4Dir).all()
    # print dirRecords
    dirRecords1 = sorted(dirRecords,key=lambda item:item.dir_name.lower())
    dirStyle='fa-folder-open-o'
    dirSize=''
    dirTypeId='dir'
    dirTags=''
    cDirList=[]
    for dir in dirRecords1:
        r1 = FileList(dir.dir_id, dir.parent_id,dir.dir_name, dirStyle,dirSize,dirTypeId, dir.update_date, dirTags )
        if is_chinese( dir.dir_name[0]) :
            cDirList.append(r1)
        else:
            resultList.append(r1)
        # print dir.__dict__
    # for iic in resultList:
    #     print iic.__dict__

    cDirList.sort(key=lambda char: lazy_pinyin(char.name)[0][0])
    resultList += cDirList
    # for iii in resultList:
    #     print iii.__dict__


    # 获取用户根目录文件
    filters4File = {
        GbFile.user_id == user_id,
        GbFile.dir_id == dir_id,
        GbFile.is_deleted == 0
    }
    fileRecords = GbFile.query.filter(*filters4File).all()

    # for fRecord in fileRecords:
    #     print fRecord.__dict__

    fileRecords1 = sorted(fileRecords,key=lambda itemF:itemF.file_display_name.lower())
    fStyle='fa-file-o'
    fTags =''
    cFileList = []
    for file in fileRecords1:
        r2 = FileList(file.file_id,file.file_real_location,file.file_display_name,fStyle,get_size_nice_str(file.file_size), file.file_type_id, file.update_date,fTags)
        if is_chinese( file.file_display_name[0]) :
            cFileList.append(r2)
        else:
            resultList.append(r2)
        # print file.__dict__
    cFileList.sort(key=lambda char2:lazy_pinyin(char2.name)[0][0])
    resultList += cFileList

    # f1 = FileList('file098', 'fname', 'fa-file-o','245.65 GB', 'type001', '2017-03-26', '武汉' )

    # print resultList
    return resultList

'''根据用户名和当前目录获取子目录和文件，不分页'''
@geobox.route('/'+pyconst.VERSION +_BASE_URL + '/<user_id1>/<dir_id1>/all')
def list_all_by_user_dir_route(user_id1,dir_id1):
    contentList = list_all_by_user_dir(user_id1,dir_id1)
    resultSchema = FileListSchema()
    return jsonify(resultSchema.dump(contentList,many=True).data)


'''根据用户名和当前文件或目录名刷新当前目录文件，不分页'''
@geobox.route('/'+pyconst.VERSION +_BASE_URL + '/refresh/<user_id>/<id>/<type>/all')
def list_refresh_all_by_user_dir_route(user_id,id,type):
    print '进入刷新目录'
    parent = ''
    if type == 'dir':
        record1 = GbFileDir.query.filter_by(dir_id=id).first()
        parent = record1.parent_id
    else:
        record2 = GbFile.query.filter_by(file_id=id).first()
        parent = record2.dir_id

    parentContent =list_all_by_user_dir(user_id,parent)
    resultSchema = FileListSchema()
    return jsonify(resultSchema.dump(parentContent,many=True).data)


'''备用'''
# @geobox.route(_BASE_URL + '/<user_id>/all')
# @geobox.route(_BASE_URL + '/<user_id>/all/<page_num>/<page_size>')
def list_all_file_by_user(user_id,page_num=1,page_size=8):

    # 获取用户根目录文件
    sqlRootFiles = "select * from gb_file where file_type_id='type001' "
    rootFiles = db.engine.execute(text(sqlRootFiles))
    print type(rootFiles)
    # print rootFiles
    resultFileList = []
    for file in rootFiles:
        # print 'type => {} values => {}'.format(type(record), record)
        resultFileList.append(GbFile(*file))

    sqlRootFolders = "select * from gb_file_dir where parent_id='0' "
    rootFolders = db.engine.execute(text(sqlRootFolders))
    print type(sqlRootFolders)
    # print sqlRootFolders
    resultFolderList = []
    for folder in rootFolders:
        # print 'type => {} values => {}'.format(type(record), record)
        resultFolderList.append(GbFileDir(*folder))


    # pid =  request.args.get('parent_id')
    #
    # if(pid is None):
    #     page = GbFile.query.filter_by(user_id=user_id).paginate(int(page_num),int(page_size),False)
    # else:
    #     filters = {
    #         GbFile.user_id == user_id,
    #         GbFile.parent_id == pid
    #     }
    #     page = GbFile.query.filter(*filters).paginate(int(page_num),int(page_size),False)
    #
    # all_file = page.items
    file_schema = GbFileDirSchema()
    return file_schema.jsonify(resultFolderList, many=True)
