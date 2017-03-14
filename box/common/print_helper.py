# _*_ coding: utf-8 _*_

def prn_obj(obj):
    print ', '.join(['%s:%s' % item for item in obj.__dict__.items()])
