# _*_ coding: utf-8 _*_
from marshmallow import Schema, fields

class FileList(object):
    def __init__(self, file_id,parent_id, file_name,style, size,type_id,modified,tags):
        # file_id代表文件id或文件夹id
        self.file_id = file_id
        self.parent_id = parent_id
        self.name = file_name
        self.style = style
        self.size = size
        self.type_id = type_id
        self.modified = modified
        self.tags = tags

    def __repr__(self):
        return '<FileList %r>' % self.name

class FileListSchema(Schema):
    file_id = fields.Str()
    parent_id = fields.Str()
    name = fields.Str()
    style = fields.Str()
    size = fields.Str()
    type_id = fields.Str()
    modified = fields.Str()
    tags = fields.Str()
