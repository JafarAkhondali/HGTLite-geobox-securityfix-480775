# _*_ coding: utf-8 _*_
from datetime import datetime

from box import geobox,db
from flask import render_template,jsonify,request
from box.constant.version import pyconst

from box.domain.login_result_dto import  LoginResult,LoginResultSchema
from box.domain.register_result_dto import  RegisterResult,RegisterResultSchema
from box.model.gb_user_do import  GbUser,GbUserSchema

@geobox.route('/'+pyconst.VERSION +'/user/login',methods=["POST"])
def user_login_validate():
    #formItems类型是list，转为dict方便取值
    form = request.form
    formItems=form.items()
    uploadDict={}
    for i,el in enumerate(formItems):
        uploadDict[el[0]] = el[1]
    print '登录  '
    print uploadDict

    loginResult  = LoginResult(uploadDict['user_name'],True)
    print loginResult.__dict__
    loginResultSchema = LoginResultSchema()
    return jsonify(loginResultSchema.dump(loginResult).data)


@geobox.route('/'+pyconst.VERSION +'/user/register',methods=["POST"])
def user_login_register():
    #formItems类型是list，转为dict方便取值
    form = request.form
    formItems=form.items()
    uploadDict={}
    for i,el in enumerate(formItems):
        uploadDict[el[0]] = el[1]
    print '注册  '
    print uploadDict

    inputId = uploadDict['user_name']
    inputPass = uploadDict['user_password']
    inputEmail = uploadDict['user_email']
    inputDate = uploadDict['register_date']

    if GbUser.query.filter_by(user_name=inputId).first():
        registerResult  = RegisterResult(inputId,False)
    else:
        print inputDate
        newUser =GbUser(
            user_id=inputId,
            user_name=inputId,
            user_nickname=inputId,
            user_password=inputPass,
            user_type=1,
            user_tel=None,
            user_email=inputEmail,
            notes='',
            create_date=datetime.strptime(inputDate,'%Y-%m-%d %H:%M:%S'),
            create_by='self',
            update_date=None,
            update_by=None,
            is_deleted=0,
            user_avatar=None)
        db.session.add(newUser)
        db.session.commit()
        registerResult  = RegisterResult(inputId,True)

    print RegisterResult.__dict__
    registerResultSchema = RegisterResultSchema()
    return jsonify(registerResultSchema.dump(registerResult).data)
