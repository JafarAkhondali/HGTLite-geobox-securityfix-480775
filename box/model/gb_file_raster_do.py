# _*_ coding: utf-8 _*_
from box import db, ma

class GbFileRaster(db.Model):
    __tablename__ = 'gb_file_raster'
    file_id = db.Column(db.String(96), primary_key=True)
    file_type_id = db.Column(db.String(96))
    img_resolution = db.Column(db.DECIMAL(16,0))
    notes = db.Column(db.String(255))
    raster_extent = db.Column(db.String(2560))

    def __init__(self, file_id, file_type_id, parent_id, is_starred, user_id):
        self.file_id = file_id
        self.file_type_id = file_type_id
        self.img_resolution = img_resolution
        self.notes = notes
        self.raster_extent = raster_extent

    def __repr__(self):
        return '<GbFileRaster %r>' % self.file_type_id


class GbFileRasterSchema(ma.ModelSchema):
    class Meta:
        model = GbFileRaster
