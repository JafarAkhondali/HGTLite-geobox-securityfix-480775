# _*_ coding: utf-8 _*_
from box import db, ma

class GbFileVector(db.Model):
    __tablename__ = 'gb_file_vector'
    file_id = db.Column(db.String(96), primary_key=True)
    file_type_id = db.Column(db.String(96))
    vector_extent = db.Column(db.String(2560))

    def __init__(self, file_id, file_type_id, vector_extent):
        self.file_id = file_id
        self.file_type_id = file_type_id
        self.vector_extent = vector_extent

    def __repr__(self):
        return '<GbFileVector %r>' % self.file_type_id


class GbFileVectorSchema(ma.ModelSchema):
    class Meta:
        model = GbFileVector
