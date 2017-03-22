# _*_ coding: utf-8 _*_
from box import db, ma

class GbFileTag(db.Model):
    __tablename__ = 'gb_file_raster'
    tag_id = db.Column(db.String(96), primary_key=True)
    tag_name = db.Column(db.String(96))
    create_date = db.Column(db.DateTime)
    create_by = db.Column(db.String(96))
    tag_group = db.Column(db.Integer)

    def __init__(self, tag_id, tag_name, parent_id, is_starred, user_id):
        self.tag_id = tag_id
        self.tag_name = tag_name
        self.create_date = create_date
        self.create_by = create_by
        self.tag_group = tag_group

    def __repr__(self):
        return '<GbFileRaster %r>' % self.tag_name


class GbFileTagSchema(ma.ModelSchema):
    class Meta:
        model = GbFileTag
