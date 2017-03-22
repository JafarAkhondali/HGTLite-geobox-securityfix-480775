# _*_ coding: utf-8 _*_
from box import app, db
from flask import jsonify
from box.model.gb_file_do import GbFile, GbFileSchema
from datetime import datetime

_BASE_URL = '/file'


@app.route(_BASE_URL + '/id/<row_id>')
def get_file_by_id(row_id):
    file_record = GbFile.query.filter_by(file_id=row_id).first()
    file_schema = GbFileSchema()
    return jsonify(file_schema.dump(file_record).data)


@app.route(_BASE_URL + '/all')
def list_all_file():
    all_file = GbFile.query.all()
    file_schema = GbFileSchema()
    return file_schema.jsonify(all_file, many=True)


def save_obj_file(file_obj):
    db.session.add(file_obj)
    db.session.commit()


# @app.route(_BASE_URL + '/add/<notes>')
@app.route(_BASE_URL + '/add')
def save_file():
    now=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    gbFile1 = GbFile('uuid','filename','filename','dirid','uploadKey','type016',1024, 'filename', 'tag', 0,now,'supersu',now,'supersu', 'supersu','notes', 'supersu', 0,'supersu', now, 0)
    print gbFile1
    print 'add01'
    record = gbFile1
    print 'add02'
    save_obj_file(record)

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
