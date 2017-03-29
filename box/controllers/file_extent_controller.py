# _*_ coding: utf-8 _*_
from box import geobox, db
from flask import jsonify,request
from datetime import datetime

from box.model.gb_file_do import GbFile, GbFileSchema


_BASE_URL = '/extent'

@geobox.route(_BASE_URL + '/<user_id>/all')
@geobox.route(_BASE_URL + '/<user_id>/all/<page_num>/<page_size>')
def list_all_file_extent(user_id,page_num=1,page_size=8):
    pid =  request.args.get('parent_id')

    if(pid is None):
        page = GbFile.query.filter_by(user_id=user_id).paginate(int(page_num),int(page_size),False)
    else:
        filters = {
            GbFile.user_id == user_id,
            GbFile.parent_id == pid
        }
        page = GbFile.query.filter(*filters).paginate(int(page_num),int(page_size),False)

    all_file = page.items
    file_schema = GbFileSchema()
    return file_schema.jsonify(all_file, many=True)
