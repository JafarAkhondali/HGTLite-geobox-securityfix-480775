# _*_ coding: utf-8 _*_
from flask import jsonify,request
from datetime import datetime
from sqlalchemy import text
from box.constant.version import pyconst

from box import geobox, db
from box.model.gb_file_do import GbFile, GbFileSchema
from box.model.gb_file_dir_do import GbFileDir, GbFileDirSchema
from box.domain.file_list_dto import FileList,FileListSchema

_BASE_URL = '/files'

'''根据用户名和当前目录获取子目录和文件，不分页'''
@geobox.route('/'+pyconst.VERSION +_BASE_URL + '/<user_id>/<dir_id>/all')
# @geobox.route(_BASE_URL + '/<user_id>/<dir_id>/all/<page_num>/<page_size>')
# def list_all_by_user_dir(user_id,dir_id,page_num=1,page_size=8):
def list_all_by_user_dir(user_id,dir_id):
    # 结果占位
    resultList = []
    # 获取用户根目录文件
    filters4File = {
        GbFile.user_id == user_id,
        GbFile.dir_id == '0'
    }
    fileRecords = GbFile.query.filter(*filters4File).all
    print fileRecords;

    # 获取用户根目录文件夹
    filters4Dir = {
        GbFileDir.user_id == user_id,
        GbFileDir.parent_id == '0'
    }
    dirRecords = GbFileDir.query.filter(*filters4Dir).all
    print dirRecords;

    f1 = FileList('file098', 'fname', 'fa-file-o','245.65 GB', 'type001', '2017-03-26', '武汉' )
    f2 = FileList('file099', 'fname2', 'fa-folder-open-o','245.66 GB', 'type002', '2017-03-28', '武汉' )
    resultList.append(f1);
    resultList.append(f2);
    print resultList;

    resultSchema = FileListSchema()
    return jsonify(resultSchema.dump(resultList,many=True).data)


@geobox.route(_BASE_URL + '/<user_id>/all')
@geobox.route(_BASE_URL + '/<user_id>/all/<page_num>/<page_size>')
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
