# _*_ coding: utf-8 _*_
from uuid import uuid4
from datetime import datetime
from random import randint
from geometry_helper import createQuadrilateral

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


# "file_tag":["武汉","影像"],

def create_box_file_doc(user_id,fid,file_display_name,file_real_location,dir_id,dir_name,file_size,file_suffix,file_tye_id,file_tag,file_notes,upload_date,dir_is_starred=0,f_is_public=0,f_is_deleted=0,f_is_starred=0):
    uploadDate = upload_date
    fileObj = {
        "file_id": fid,
        "file_display_name":file_display_name,
        "file_real_name": file_display_name,
        "file_real_location":file_real_location,
        "file_dir":{
            "id":dir_id,
            "name":dir_name,
            "is_starred":dir_is_starred
        },
        "file_size":file_size,
        "file_suffix":file_suffix,
        "file_type":{
            "type_id":file_tye_id,
            "type_name_cn":"",
            "group_id":"",
            "group_name_cn":""
        },
        "file_tag":file_tag,
        "is_public":f_is_public,
        "is_deleted":f_is_deleted,
        "is_starred":f_is_starred,
        "file_notes":file_notes,
        "user_id":user_id,
        "file_user":{
            "create_by":user_id,
            "update_by":user_id,
            "upload_by":user_id
        },
        "file_date":{
            "create_date":uploadDate,
            "update_date":uploadDate,
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


def create_polygon_shape(polygon_coords):
    print polygon_coords
    print type(polygon_coords)
    linestring = polygon_coords
    linestring.append(polygon_coords[0])
    print linestring
    polygonShape = {
        "type":"polygon",
        "coordinates":[linestring]
    }
    return polygonShape



if __name__=="__main__":
    for i in range(0,1):
        print '{0:1}'.format(i)
        fileId = str(uuid4()).replace('-','')
        upTime = datetime.now().strftime('%Y-%m-%dT%H:%M:%SZ')
        # boundShp = createQuadrilateral()
        boundShp = createQuadrilateral()
        # fileDoc = create_box_file_doc(fileId,"武汉影像"+str(i)+".tif", "武汉数据", upTime)
        fileDoc = create_box_file_doc(
            user_id='supersu',
            fid=fileId,
            file_display_name="武汉影像"+str(i),
            file_real_location='real_loc',
            dir_id='dir',
            dir_name='di',
            file_size=10240,
            file_suffix='tif',
            file_tye_id='type016',
            file_tag='tif',
            file_notes='',
            upload_date=upTime,
            dir_is_starred=0,
            f_is_public=0,
            f_is_deleted=0,
            f_is_starred=0)
        rasterPartDoc = create_raster_part_doc(randint(0,50),boundShp,"武汉"+str(i))
        # print rasterPartDoc
        create_index("geoboxes","box_file",fileId,fileDoc,es)
        put_doc("geoboxes","box_file",fileId,rasterPartDoc,es)
