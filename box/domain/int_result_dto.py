# _*_ coding: utf-8 _*_
from marshmallow import Schema, fields

class IntResult(object):
    def __init__(self, result):
        self.result = result

    def __repr__(self):
        return '<IntResult %r>' % self.result


class IntResultSchema(Schema):
    result = fields.Int()
