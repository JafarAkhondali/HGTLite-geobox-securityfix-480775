# _*_ coding: utf-8 _*_
from box import db, ma

class GbFileDownload(db.Model):
    __tablename__ = 'gb_file_download'
    download_id = db.Column(db.String(96), primary_key=True)
    file_id = db.Column(db.String(96))
    download_by = db.Column(db.String(96))
    download_date = db.Column(db.DateTime)

    def __init__(self, download_id, file_id, download_by, download_date):
        self.download_id = download_id
        self.file_id = file_id
        self.download_by = download_by
        self.download_date = download_date

    def __repr__(self):
        return '<GbFileDownload %r>' % self.file_id

class GbFileDownload(ma.ModelSchema):
    class Meta:
        model = GbFileDownload
