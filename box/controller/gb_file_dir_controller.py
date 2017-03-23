# _*_ coding: utf-8 _*_
from box import app, db
from flask import jsonify,request
from box.model.gb_file_dir_do import GbFileDir, GbFileDirSchema

_BASE_URL = '/dir'


@app.route(_BASE_URL + '/id/<row_id>')
def get_dir_by_id(row_id):
    dir_record = GbFileDir.query.filter_by(dir_id=row_id).first()
    dir_schema = GbFileDirSchema()
    return jsonify(dir_schema.dump(dir_record).data)


@app.route(_BASE_URL + '/all')
def list_all_dir():
    all_dir = GbFileDir.query.all()
    dir_schema = GbFileDirSchema()
    # print '===after'
    # print all_suffix[0]
    # return all_suffix[0].suffix_details
    # return jsonify(suffix_schema.dump(all_suffix).data)
    return dir_schema.jsonify(all_dir, many=True)

@app.route(_BASE_URL + '/<user_id>/all')
@app.route(_BASE_URL + '/<user_id>/all/<page_num>/<page_size>')
def list_all_dir_by_user_id(user_id,page_num=1,page_size=2):
    pid =  request.args.get('parent_id')

    if(pid is None):
        page = GbFileDir.query.filter_by(user_id=user_id).paginate(int(page_num),int(page_size),False)
        # print all_dir

    else:
        filters = {
            GbFileDir.user_id == user_id,
            GbFileDir.parent_id == pid
        }
        page = GbFileDir.query.filter(*filters).paginate(int(page_num),int(page_size),False)

    all_dir = page.items
    dir_schema = GbFileDirSchema()
    return dir_schema.jsonify(all_dir, many=True)

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
