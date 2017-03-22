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

    form = request.form
    formItems=form.items()

    userId=formItems[0]
    # print type(form)
    # print type(formItems)
    # print type(userId)
    #for i,el in enumerate()

    # Create a unique "session ID" for this particular batch of uploads.
    upload_key = str(uuid4())
    print upload_key
    # Is the upload using Ajax, or a direct POST by the form?
    is_ajax = False
    if form.get("__ajax", None) == "true":
        is_ajax = True

    # Target folder for these uploads.
    target = boxfile_base_dir+'/{}'.format(upload_key)
    print target
    os.mkdir(target)

    print "=== Form Data ==="
    for key, value in formItems:
        print "接受到的form文件有"
        print key, "=>", value

    fileLists = request.files.getlist("file");
    print len(fileLists)
    for upload in fileLists:
        filename = upload.filename.rsplit("/")[0]
        destination = "/".join([target, filename])
        print "Accept incoming file:", filename
        print "Save it to:", destination
        upload.save(destination)

    if is_ajax:
        return ajax_response(True, upload_key)
    else:
        return '上传完成'


def ajax_response(status, msg):
    status_code = "ok" if status else "error"
    return json.dumps(dict(
        status=status_code,
        msg=msg,
    ))


def print_obj(obj):
    print '\n属性 '.join(['%s:%s' % item for item in obj.__dict__.items()])
