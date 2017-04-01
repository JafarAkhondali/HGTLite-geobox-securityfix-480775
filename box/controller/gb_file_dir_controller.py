# _*_ coding: utf-8 _*_
from uuid import uuid4
from datetime import datetime

from box import geobox, db
from flask import jsonify,request
from box.model.gb_file_dir_do import GbFileDir, GbFileDirSchema
from box.domain.new_folder_result_dto import NewFolderResult,NewFolderResultSchema

_BASE_URL = '/dir'


@geobox.route(_BASE_URL + '/id/<row_id>')
def get_dir_by_id(row_id):
    dir_record = GbFileDir.query.filter_by(dir_id=row_id).first()
    dir_schema = GbFileDirSchema()
    return jsonify(dir_schema.dump(dir_record).data)


@geobox.route(_BASE_URL + '/all')
def list_all_dir():
    all_dir = GbFileDir.query.all()
    dir_schema = GbFileDirSchema()
    # print '===after'
    # print all_suffix[0]
    # return all_suffix[0].suffix_details
    # return jsonify(suffix_schema.dump(all_suffix).data)
    return dir_schema.jsonify(all_dir, many=True)

@geobox.route(_BASE_URL + '/<user_id>/all')
@geobox.route(_BASE_URL + '/<user_id>/all/<page_num>/<page_size>')
def list_all_dir_by_user_id(user_id,page_num=1,page_size=8):
    pid =  request.args.get('parent_id')

    if(pid is None):
        page = GbFileDir.query.filter_by(user_id=user_id).paginate(int(page_num),int(page_size),False)
    else:
        filters = {
            GbFileDir.user_id == user_id,
            GbFileDir.parent_id == pid
        }
        page = GbFileDir.query.filter(*filters).paginate(int(page_num),int(page_size),False)

    all_dir = page.items
    dir_schema = GbFileDirSchema()
    return dir_schema.jsonify(all_dir, many=True)


def save_obj_dir(bundle_obj):
    db.session.add(bundle_obj)
    db.session.commit()


@geobox.route(_BASE_URL + '/add/<user_id>/<parent_dir_id>/<dir_name>')
def save_dir_by_name(user_id,parent_dir_id,dir_name):
    # print 'add01'
    new_dir_id = str(uuid4()).replace('-','')
    new_dir = GbFileDir(new_dir_id, dir_name, parent_dir_id, 0,user_id,None,None,user_id,datetime.now())
    # print 'add02'
    db.session.add(new_dir)
    db.session.commit()
    result = NewFolderResult(user_id,True,new_dir_id)
    result_schema = NewFolderResultSchema()
    return jsonify(result_schema.dump(result).data)



#
# @geobox.route(_BASE_URL + '/update/id/<row_id>')
# def update_by_id(row_id):
#     record = GbSuffixBundle.query.filter_by(bundle_id=row_id).first()
#     record.type_id = 'type009'
#     record.file_suffix = 'jpeg'
#     db.session.add(record)
#     db.session.commit()
#
#
# @geobox.route(_BASE_URL + '/remove/id/<suffix_id>')
# def remove_suffix_bundle_by_id(suffix_id):
#     to_remove_obj = GbSuffixBundle.query.filter_by(bundle_id=suffix_id).first()
#     print to_remove_obj.suffix_details
#     db.session.delete(to_remove_obj)
#     db.session.commit()
