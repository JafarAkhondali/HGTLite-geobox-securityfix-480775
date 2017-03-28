# _*_ coding: utf-8 _*_
from marshmallow import Schema, fields

class RegisterResult(object):
    def __init__(self, user_name, register_result):
        self.user_name = user_name
        self.register_result = register_result

    def __repr__(self):
        return '<RegisterResult %r>' % self.user_name


class RegisterResultSchema(Schema):
    user_name = fields.Str()
    register_result = fields.Bool()
