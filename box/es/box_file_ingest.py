# _*_ coding: utf-8 _*_
from uuid import uuid4
from datetime import datetime
from geometry_helper import createQuadrilateral
from random import randint
# from ../common/print_hepler
try:
    from elasticsearch import Elasticsearch
    es = Elasticsearch()
except ImportError:
    quit()

def create_index( index_name,type_name,uuid, body,es_conn=es):
    ret = es_conn.create(index=index_name,
                    doc_type=type_name,
                    id=uuid,
                    body=body)
    return ret

def put_doc( index_name,type_name,uuid, body,es_conn=es):
    ret = es_conn.update(index=index_name,
                    doc_type=type_name,
                    id=uuid,
                    body=body)
    return ret

def create_box_file_doc(fid,file_display_name,file_dir_name,upload_date):
    uploadDate = upload_date
    fileObj = {
        "file_id": 'boxfid'+fid,
        "file_display_name":file_display_name,
        "file_real_name":'boxfrname'+fid,
        "file_real_location":'boxfrloc'+fid,
        "file_dir":{
            "id":'bdirid'+fid,
            "name":file_dir_name,
            "is_starred":"0"
        },
        "file_size":1536000,
        "file_suffix":"tif",
        "file_type":{
            "type_id":"type001",
            "type_name_cn":"普通影像",
            "group_id":"group001",
            "group_name_cn":"普通影像"
        },
        "file_tag":["武汉","影像"],
        "is_public":"0",
        "is_deleted":"0",
        "is_starred":"0",
        "file_notes":"文件说明： 来源于网络",
        "user_id":'buserid'+fid,
        "file_user":{
            "create_by":"userCreated",
            "upload_by":"userUploaded"
        },
        "file_date":{
            "create_date":uploadDate,
            "upload_date":uploadDate
        }
    }
    return fileObj

def create_raster_part_doc(resolution,ext,region):
    rasterObj={
        "doc":{
            "raster":{
                "img_resolution":resolution,
                "raster_extent": ext,
                "geo_region":region
            }
        }

        }
    return rasterObj

def create_vector_part_doc(ext,region):
    vectorObj = {
        "doc":{
        "vector":{
            "vector_extent": ext,
            "geo_region":region
        }
        }
    }
    return vectorObj

if __name__=="__main__":
    for i in range(0,100):
        print '{0:1}'.format(i)
        fileId = str(uuid4()).replace('-','')
        upTime = datetime.now().strftime('%Y-%m-%dT%H:%M:%SZ')
        boundShp = createQuadrilateral()
        fileDoc = create_box_file_doc(fileId,"武汉影像"+str(i)+".tif", "武汉数据", upTime)
        rasterPartDoc = create_raster_part_doc(randint(0,50),boundShp,"武汉"+str(i))
        create_index("geoboxes","box_file",fileId,fileDoc,es)
        put_doc("geoboxes","box_file",fileId,rasterPartDoc,es)
