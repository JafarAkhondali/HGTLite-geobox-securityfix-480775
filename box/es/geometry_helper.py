# _*_ coding: utf-8 _*_
from random import random, randint
import math
import time

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
    shpObj = {
        "type": "polygon",
        "coordinates": linestring
    }
    return shpObj


def createQuadrilateral():
    polygonObj = random_elastic_polygon(4)
    return polygonObj
