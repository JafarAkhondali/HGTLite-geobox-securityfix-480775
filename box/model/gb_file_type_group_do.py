# _*_ coding: utf-8 _*_
from box import db, ma

class GbFileTypeGroup(db.Model):
    __tablename__ = 'gb_file_type_group'
    group_id = db.Column(db.String(96), primary_key=True)
    group_name = db.Column(db.String(96))
    group_name_cn = db.Column(db.String(96))
    is_made_in_china = db.Column(db.Integer)
    is_free = db.Column(db.Integer)
    notes = db.Column(db.String(96))
    group_icon = db.Column(db.String(96))

    def __init__(self, group_id, group_name, group_name_cn, is_starred, user_id):
        self.group_id = group_id
        self.group_name = group_name
        self.group_name_cn = group_name_cn
        self.is_made_in_china = is_made_in_china
        self.is_free = is_free
        self.notes = notes
        self.group_icon = group_icon


    def __repr__(self):
        return '<GbFileSharing %r>' % self.group_name


class GbFileSharingSchema(ma.ModelSchema):
    class Meta:
        model = GbFileSharing
