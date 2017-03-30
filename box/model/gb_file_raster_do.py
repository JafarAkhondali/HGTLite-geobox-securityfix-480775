# _*_ coding: utf-8 _*_
from box import db, ma

class GbFileRaster(db.Model):
    __tablename__ = 'gb_file_raster'
    file_id = db.Column(db.String(96), primary_key=True)
    file_type_id = db.Column(db.String(96))
    img_resolution = db.Column(db.DECIMAL(16,0))
    notes = db.Column(db.String(255))
    raster_extent = db.Column(db.String(2560))
    create_by = db.Column(db.String(96))
    create_date = db.Column(db.DateTime)
    update_by = db.Column(db.String(96))
    update_date = db.Column(db.DateTime)

    def __init__(self, file_id, file_type_id, parent_id, is_starred, user_id,create_by,create_date,update_by,update_date):
        self.file_id = file_id
        self.file_type_id = file_type_id
        self.img_resolution = img_resolution
        self.notes = notes
        self.raster_extent = raster_extent
        self.create_by=create_by
        self.create_date=create_date
        self.update_by=update_by
        self.update_date=update_date

    def __repr__(self):
        return '<GbFileRaster %r>' % self.file_type_id


class GbFileRasterSchema(ma.ModelSchema):
    class Meta:
        model = GbFileRaster
