# _*_ coding: utf-8 _*_
from box import geobox,db
from flask import render_template,jsonify,request
from box.constant.version import pyconst

from box.model.gb_file_do import GbFile, GbFileSchema
from box.model.gb_file_dir_do import GbFileDir, GbFileDirSchema
from box.domain.bool_result_dto import  BoolResult,BoolResultSchema
from box.domain.int_result_dto import  IntResult,IntResultSchema

_BASE_URL = '/file'

@geobox.route('/'+pyconst.VERSION +_BASE_URL +'/rename/<id>/<new_name>')
@geobox.route('/'+pyconst.VERSION +_BASE_URL + '/rename/<id>/<new_name>/<type>')
def rename_file_or_dir(id,new_name,type='dir'):


    if type=='dir' :
        record1 =GbFileDir.query.filter_by(dir_id=id).first()
        record1.dir_name=new_name

    else:
        record2 =GbFile.query.filter_by(file_id=id).first()
        record2.file_display_name=new_name

    db.session.commit()

    boolResult  = BoolResult(True)
    print boolResult.__dict__
    boolResultSchema = BoolResultSchema()
    return jsonify(boolResultSchema.dump(boolResult).data)

@geobox.route('/'+pyconst.VERSION +_BASE_URL + '/remove/<id>')
def remove_file(id):

    record =GbFile.query.filter_by(file_id=id).first()
    record.is_deleted=1

    db.session.commit()

    boolResult  = BoolResult(True)
    print boolResult.__dict__
    boolResultSchema = BoolResultSchema()
    return jsonify(boolResultSchema.dump(boolResult).data)

@geobox.route('/'+pyconst.VERSION +_BASE_URL +'/toggle/star/<id>')
@geobox.route('/'+pyconst.VERSION +_BASE_URL + '/toggle/star/<id>/<type>')
def toggle_star_file_or_dir(id,type='dir'):

    resultInt = 0

    if type=='dir' :
        record1 =GbFileDir.query.filter_by(dir_id=id).first()
        record1.is_starred= 1 if record1.is_starred==0 else 0
        resultInt = record1.is_starred
    else:
        record2 =GbFile.query.filter_by(file_id=id).first()
        record2.is_starred=1 if record2.is_starred==0 else 0
        resultInt = record2.is_starred

    db.session.commit()

    intResult  = IntResult(resultInt)
    print intResult.__dict__
    intResultSchema = IntResultSchema()
    return jsonify(intResultSchema.dump(intResult).data)
