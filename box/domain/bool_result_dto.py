# _*_ coding: utf-8 _*_
from marshmallow import Schema, fields

class BoolResult(object):
    def __init__(self, result):
        self.result = result

    def __repr__(self):
        return '<BoolResult %r>' % self.result


class BoolResultSchema(Schema):
    result = fields.Bool()
