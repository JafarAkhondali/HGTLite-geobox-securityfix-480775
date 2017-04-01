# _*_ coding: utf-8 _*_
from marshmallow import Schema, fields

class NewFolderResult(object):
    def __init__(self, user_name, new_folder_result,dir_id):
        self.user_name = user_name
        self.new_folder_result = new_folder_result
        self.dir_id = dir_id

    def __repr__(self):
        return '<RegisterResult %r>' % self.dir_id


class NewFolderResultSchema(Schema):
    user_name = fields.Str()
    new_folder_result = fields.Bool()
    dir_id = fields.Str()
