# _*_ coding: utf-8 _*_
from box import geobox, db
from flask import jsonify,request
from datetime import datetime

from box.model.gb_file_raster_do import GbFileRaster, GbFileRasterSchema


_BASE_URL = '/raster'


@geobox.route(_BASE_URL + '/id/<row_id>')
def get_raster_by_id(row_id):
    file_record = GbFileRaster.query.filter_by(file_id=row_id).first()
    file_schema = GbFileRasterSchema()
    return jsonify(file_schema.dump(file_record).data)


@geobox.route(_BASE_URL + '/<user_id>/all')
@geobox.route(_BASE_URL + '/<user_id>/all/<page_num>/<page_size>')
def list_all_raster(user_id,page_num=1,page_size=8):
    pid =  request.args.get('parent_id')

    if(pid is None):
        page = GbFileRaster.query.filter_by(user_id=user_id).paginate(int(page_num),int(page_size),False)
    else:
        filters = {
            GbFileRaster.user_id == user_id,
            GbFileRaster.parent_id == pid
        }
        page = GbFileRaster.query.filter(*filters).paginate(int(page_num),int(page_size),False)

    all_file = page.items
    print type(all_file)
    file_schema = GbFileRasterSchema()
    return file_schema.jsonify(all_file, many=True)

'''插入单条记录

'''
def save_obj_raster(raster_obj):
    db.session.add(raster_obj)
    db.session.commit()

'''插入多条记录

'''
def save_list_obj_raster(file_obj):
    for o in file_obj:
        db.session.add(o)
    db.session.commit()


# @geobox.route(_BASE_URL + '/add/<notes>')
@geobox.route(_BASE_URL + '/add')
def save_raster_route():
    # now=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    # gbFileRaster1 = GbFileRaster('uuid','filename','filename','dirid','uploadKey','type016',1024, 'filename', 'tag', 0,now,'supersu',now,'supersu', 'supersu','notes', 'supersu', 0,'supersu', now, 0)
    # print gbFileRaster1
    # print 'add01'
    # record = gbFile1
    # save_obj_file(gbFile1)
    print 'add02'

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
