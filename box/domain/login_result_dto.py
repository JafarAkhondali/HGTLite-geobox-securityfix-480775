# _*_ coding: utf-8 _*_
from marshmallow import Schema, fields

class LoginResult(object):
    def __init__(self, user_name, validate_result):
        self.user_name = user_name
        self.validate_result = validate_result

    def __repr__(self):
        return '<LoginResult %r>' % self.user_name


class LoginResultSchema(Schema):
    user_name = fields.Str()
    validate_result = fields.Str()
