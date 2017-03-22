# _*_ coding: utf-8 _*_
from box import db, ma

class GbFileSharing(db.Model):
    __tablename__ = 'gb_file_sharing'
    sharing_id = db.Column(db.String(96), primary_key=True)
    file_id = db.Column(db.String(96))
    sharing_from = db.Column(db.String(96))
    sharing_to = db.Column(db.String(96))
    sharing_date = db.Column(db.DateTime)
    sharing_notes = db.Column(db.String(255))
    is_deleted = db.Column(db.Integer)

    def __init__(self, sharing_id, file_id, parent_id, is_starred, user_id):
        self.sharing_id = sharing_id
        self.file_id = file_id
        self.sharing_from = sharing_from
        self.sharing_to = sharing_to
        self.sharing_date = sharing_date
        self.sharing_notes = sharing_notes
        self.is_deleted = is_deleted


    def __repr__(self):
        return '<GbFileSharing %r>' % self.sharing_id


class GbFileSharingSchema(ma.ModelSchema):
    class Meta:
        model = GbFileSharing
