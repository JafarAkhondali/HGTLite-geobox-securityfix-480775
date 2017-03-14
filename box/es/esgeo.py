# _*_ coding: utf-8 _*_
from random import random, randint
import math
import time


try:
    from elasticsearch import Elasticsearch
    es = Elasticsearch()
except ImportError:
    quit()


es_index = 'esgeoindex'

def get(query, index=es_index, es=es):
    body = {
            "query": query,
            "size": 1000
            }
    ret = es.search(index=index, body=body)
    return ret


def put(uuid, json, doc, index=es_index, es=es):
    ret = es.create(index=index,
                    doc_type=doc,
                    id=uuid,
                    body=json)
    return ret


def delete_index(index=es_index, es=es):
    ret = es.indices.delete(index=index)
    return ret


def create_index(index=es_index, es=es, number_of_shards=1, number_of_replicas=0):
    settings = {
        "settings": {
            "number_of_shards": number_of_shards,
            "number_of_replicas": number_of_replicas
        },
        "mappings": {
            "esgeotype": {
                "properties": {
                    "hellogeo": {
                        "type": "geo_shape"
                        # "precision": "10m"
                    }
                }

            }
        }
    }
    ret = es.indices.create(index=index, body=settings)
    return ret


def random_elastic_linestring(nodes, mx, my, Mx, My):
    linestring = []
    for n in range(0, nodes):
        linestring.append([randint(mx, Mx), randint(my, My)])
    es_doc = {
        "type": "linestring",
        "coordinates": linestring
    }
    return es_doc

def createBottomLeftPt():
    return [randint(110,114), randint(27,30)]

def createBottomRightPt():
    return [randint(114,118), randint(27,30)]

def createTopRightPt():
    return [randint(114,118), randint(30,33)]

def createTopLeftPt():
    return [randint(110,114), randint(30,33)]

def random_elastic_polygon(nodes):
    linestring = []
    linestring.append(createBottomLeftPt())
    linestring.append(createBottomRightPt())
    linestring.append(createTopRightPt())
    linestring.append(createTopLeftPt())
    linestring.append(linestring[0])
    linestring=[linestring]
    # for item in linestring[0]:
    #     print item
    es_doc = {
        "type": "polygon",
        "coordinates": linestring
    }
    return es_doc

if __name__ == "__main__":
    try:
        delete_index()
    except:
        print("It doesn't exist")
    create_index()
    # put(a['id'],a,'esgeotype')
    for i in range(0,100):
	print '== {0:1d}'.format(i)
        x = (random() - .5) * 1000
        y = (random() - .5) * 1000
        a = {'id': 'polygonid' + str(i),
             'Travel_Rate': randint(400, 2000),
             'hellogeo': random_elastic_polygon(4),
             'DEL': False,
             '_time': time.time()}
        # print a
        put(a['id'], a, 'esgeotype')
