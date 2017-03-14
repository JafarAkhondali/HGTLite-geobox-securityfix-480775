# _*_ coding: utf-8 _*_
from uuid import uuid4
from datetime import datetime
from geometry_helper import createQuadrilateral
try:
    from elasticsearch import Elasticsearch
    es = Elasticsearch()
except ImportError:
    quit()

def put( index_name,type_name,uuid, body,es_conn=es):
    ret = es_conn.create(index=index_name,
                    doc_type=type_name,
                    id=uuid,
                    body=body)
    return ret


def save_box_file(upload_date,geo_extent):
    uploadDate = upload_date
    geoExtent = geo_extent
    fileObj = {
        "file_id": 'bid'+str(uuid4()).replace('-',''),
        "file_dispaly_name":"武汉市2017年1月影像",
        "file_real_name":'bname'+str(uuid4()).replace('-',''),
        "file_real_location":'bloc'+str(uuid4()).replace('-',''),
        "file_dir":{
            "id":'bdirid'+str(uuid4()).replace('-',''),
            "name":"武汉市数据",
            "is_starred":"0"
        },
        "file_size":1024000,
        "file_suffix":"tif",
        "file_type":{
            "type_id":"type001",
            "type_name_cn":"普通影像",
            "group_id":"group001",
            "group_name_cn":"普通影像"
        },
        "file_tag":["武汉","影像"],
        "raster":{
            "img_resolution":0.4,
            "raster_extent": geoExtent,
            "geo_region":"武汉市"
        },
    
        "is_public":"0",
        "is_deleted":"0",
        "is_starred":"0",
        "file_notes":"文件说明： 来源于网络",
        "user_id":'buserid'+str(uuid4()).replace('-',''),
        "file_user":{
            "create_by":uploadDate,
            "upload_by":uploadDate
        },
        "file_date":{
            "create_date":"2017-03-14T12:30:13Z",
            "upload_date":"2017-03-15T12:30:13Z",
        }

    }
    return fileObj


if __name__=="__main__":
    fileId = str(uuid4()).replace('-','')
    upTime = datetime.now().strftime('%Y-%m-%dT%H:%M:%SZ')
    boundShp = createQuadrilateral()
    fileDocObj = save_box_file(upTime,boundShp)
    # for prop in fileDocObj:
    #     print prop
    put("geoboxes","box_file",fileId,fileDocObj,es)
