# _*_ coding: utf-8 _*_

from box import app, db
from flask import Flask, request, redirect, url_for, render_template
from uuid import uuid4
import os
import json
import ConfigParser

@app.route("/file/upload", methods=["POST"])
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
    # print uploadDict

    # 创建本次上传id，作为文件存储目录id
    uploadKey = str(uuid4())
    # print upload_key

    # 创建文件存储真实文件夹，默认全部存储在第二层文件夹
    fileRealFolder = '/{rootDir}/{fileDir}'.format(rootDir=uploadDict['user_id'],fileDir=uploadKey)
    targetPath = boxfile_base_dir+fileRealFolder
    # print targetPath
    os.makedirs(targetPath)

    # for key, value in formItems:
    #     print "接受到的form文件有"
    #     print key, "=>", value

    fileLists = request.files.getlist("file");
    # print len(fileLists)
    for upload in fileLists:
        filename = upload.filename.rsplit("/")[0]
        destination = "/".join([targetPath, filename])
        # print "Accept incoming file:", filename
        # print "Save it to:", destination
        upload.save(destination)

    return '上传完成'
