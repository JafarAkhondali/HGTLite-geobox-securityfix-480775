# _*_ coding: utf-8 _*_
from box import db, ma

class GbFileDir(db.Model):
    __tablename__ = 'gb_file_dir'
    dir_id = db.Column(db.String(96), primary_key=True)
    dir_name = db.Column(db.String(256))
    parent_id = db.Column(db.String(96))
    is_starred = db.Column(db.Integer)
    user_id = db.Column(db.String(96))
    create_by = db.Column(db.String(96))
    create_date = db.Column(db.DateTime)
    update_by = db.Column(db.String(96))
    update_date = db.Column(db.DateTime)

    def __init__(self, dir_id, dir_name, parent_id, is_starred, user_id,create_by,create_date,update_by,update_date):
        self.dir_id = dir_id
        self.dir_name = dir_name
        self.parent_id = parent_id
        self.is_starred = is_starred
        self.user_id = user_id
        self.create_by=create_by
        self.create_date=create_date
        self.update_by=update_by
        self.update_date=update_date

    def __repr__(self):
        return '<GbFileDir %r>' % self.dir_name

class GbFileDirSchema(ma.ModelSchema):
    class Meta:
        model = GbFileDir
