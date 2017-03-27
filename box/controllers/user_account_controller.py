# _*_ coding: utf-8 _*_
from box import app
from flask import render_template,jsonify,request
from box.constant.version import pyconst

from box.domain.login_result_dto import  LoginResult,LoginResultSchema

@app.route('/'+pyconst.VERSION +'/user/login',methods=["POST"])
def user_login_validate():
    #formItems类型是list，转为dict方便取值
    form = request.form
    formItems=form.items()
    uploadDict={}
    for i,el in enumerate(formItems):
        uploadDict[el[0]] = el[1]
    print '上传  '
    print uploadDict

    loginResult  = LoginResult(uploadDict['user_name'],True)
    print loginResult.__dict__
    loginResultSchema = LoginResultSchema()
    return jsonify(loginResultSchema.dump(loginResult).data)
