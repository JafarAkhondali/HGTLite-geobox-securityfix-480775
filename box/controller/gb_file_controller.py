# _*_ coding: utf-8 _*_
from box import app, db
from flask import jsonify
from box.model.gb_file_do import GbFile, GbFileSchema

_BASE_URL = '/file'


@app.route(_BASE_URL + '/id/<row_id>')
def get_file_by_id(row_id):
    file_record = GbFile.query.filter_by(file_id=row_id).first()
    file_schema = GbFileSchema()
    return jsonify(file_schema.dump(file_record).data)


@app.route(_BASE_URL + '/all')
def list_all_file_bundle():
    all_file = GbFile.query.all()
    file_schema = GbFileSchema()
    return file_schema.jsonify(all_file, many=True)

#
# def save_obj_suffix_bundle(bundle_obj):
#     db.session.add(bundle_obj)
#     db.session.commit()
#
#
# @app.route(_BASE_URL + '/add/<suffix_details>')
# def save_suffix_bundle(suffix_details):
#     print 'add01'
#     bundle = GbSuffixBundle('id002', 'type002', 'topojson', suffix_details)
#     print 'add02'
#     save_obj_suffix_bundle(bundle)
#
#
# @app.route(_BASE_URL + '/update/id/<row_id>')
# def update_by_id(row_id):
#     record = GbSuffixBundle.query.filter_by(bundle_id=row_id).first()
#     record.type_id = 'type009'
#     record.file_suffix = 'jpeg'
#     db.session.add(record)
#     db.session.commit()
#
#
# @app.route(_BASE_URL + '/remove/id/<suffix_id>')
# def remove_suffix_bundle_by_id(suffix_id):
#     to_remove_obj = GbSuffixBundle.query.filter_by(bundle_id=suffix_id).first()
#     print to_remove_obj.suffix_details
#     db.session.delete(to_remove_obj)
#     db.session.commit()
