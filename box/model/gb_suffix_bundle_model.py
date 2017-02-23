# _*_ coding: utf-8 _*_
from box import db, ma


# 定义表模型
class GbSuffixBundle(db.Model):
    __tablename__ = 'gb_suffix_bundle'
    bundle_id = db.Column(db.String(32), primary_key=True)
    type_id = db.Column(db.String(32))
    file_suffix = db.Column(db.String(256))
    suffix_details = db.Column(db.String(256))

    def __init__(self, bundle_id, type_id, file_suffix, suffix_details):
        self.bundle_id = bundle_id
        self.type_id = type_id
        self.file_suffix = file_suffix
        self.suffix_details = suffix_details

    def __repr__(self):
        return '<GbSuffixBundle %r>' % self.file_suffix


class GbSuffixBundleSchema(ma.ModelSchema):
    class Meta:
        model = GbSuffixBundle
