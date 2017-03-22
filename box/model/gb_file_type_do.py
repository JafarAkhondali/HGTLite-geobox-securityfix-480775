# _*_ coding: utf-8 _*_
from box import db, ma

class GbFileType(db.Model):
    __tablename__ = 'gb_file_type'
    type_id = db.Column(db.String(96), primary_key=True)
    type_name = db.Column(db.String(96))
    type_icon_location = db.Column(db.String(256))
    type_name_cn = db.Column(db.String(96))
    notes = db.Column(db.String(256))
    type_group_id = db.Column(db.String(96))

    def __init__(self, type_id, file_id, parent_id, is_starred, user_id):
        self.type_id = type_id
        self.type_name = type_name
        self.type_icon_location = type_icon_location
        self.type_name_cn = type_name_cn
        self.notes = notes
        self.sharing_notes = sharing_notes
        self.type_group_id = type_group_id


    def __repr__(self):
        return '<GbFileType %r>' % self.type_name


class GbFileTypeSchema(ma.ModelSchema):
    class Meta:
        model = GbFileType
