# _*_ coding: utf-8 _*_
from box import db, ma

class GbFileVector(db.Model):
    __tablename__ = 'gb_file_vector'
    file_id = db.Column(db.String(96), primary_key=True)
    file_type_id = db.Column(db.String(96))
    vector_extent = db.Column(db.String(2560))
    create_by = db.Column(db.String(96))
    create_date = db.Column(db.DateTime)
    update_by = db.Column(db.String(96))
    update_date = db.Column(db.DateTime)

    def __init__(self, file_id, file_type_id, vector_extent,create_by,create_date,update_by,update_date):
        self.file_id = file_id
        self.file_type_id = file_type_id
        self.vector_extent = vector_extent
        self.create_by=create_by
        self.create_date=create_date
        self.update_by=update_by
        self.update_date=update_date

    def __repr__(self):
        return '<GbFileVector %r>' % self.file_type_id


class GbFileVectorSchema(ma.ModelSchema):
    class Meta:
        model = GbFileVector
