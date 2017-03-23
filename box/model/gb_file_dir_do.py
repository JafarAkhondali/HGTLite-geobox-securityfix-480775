# _*_ coding: utf-8 _*_
from box import db, ma

class GbFileDir(db.Model):
    __tablename__ = 'gb_file_dir'
    dir_id = db.Column(db.String(96), primary_key=True)
    dir_name = db.Column(db.String(256))
    parent_id = db.Column(db.String(96))
    is_starred = db.Column(db.Integer)
    user_id = db.Column(db.String(96))

    def __init__(self, dir_id, dir_name, parent_id, is_starred, user_id):
        self.dir_id = dir_id
        self.dir_name = dir_name
        self.parent_id = parent_id
        self.is_starred = is_starred
        self.user_id = user_id

    def __repr__(self):
        return '<GbFileDir %r>' % self.dir_name

class GbFileDirSchema(ma.ModelSchema):
    class Meta:
        model = GbFileDir
