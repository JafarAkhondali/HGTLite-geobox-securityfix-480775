# _*_ coding: utf-8 _*_
from box import db, ma


class GbFile(db.Model):
    __tablename__ = 'gb_file'
    file_id = db.Column(db.String(96), primary_key=True)
    file_display_name = db.Column(db.String(128))
    file_real_name = db.Column(db.String(256))
    dir_id = db.Column(db.String(96))
    file_real_location = db.Column(db.String(2560))
    file_type_id = db.Column(db.String(32))
    file_size = db.Column(db.Integer)
    file_suffix = db.Column(db.String(16))
    file_tag = db.Column(db.String(128))
    is_public = db.Column(db.Integer)
    create_date = db.Column(db.DateTime)
    create_by = db.Column(db.String(96))
    update_date = db.Column(db.DateTime)
    update_by = db.Column(db.String(96))
    file_hashcode = db.Column(db.String(256))
    notes = db.Column(db.String(512))
    user_id = db.Column(db.String(96))
    is_deleted = db.Column(db.Integer)
    upload_by = db.Column(db.String(96))
    upload_date = db.Column(db.DateTime)
    is_starred = db.Column(db.Integer)

    def __init__(self, file_id, file_display_name, file_real_name, dir_id, file_real_location, file_type_id,
                 file_size, file_suffix, file_tag, is_public, create_date, create_by, update_date, update_by,
                 file_hashcode, notes, user_id,is_deleted, upload_by, upload_date, is_starred):
        file_id = file_id
        file_display_name = file_display_name
        file_real_name = file_real_name
        dir_id = dir_id
        file_real_location = file_real_location
        file_type_id = file_type_id
        file_size = file_size
        file_suffix = file_suffix
        file_tag = file_tag
        is_public = is_public
        create_date = create_date
        create_by = create_by
        update_date = update_date
        update_by = update_by
        file_hashcode = file_hashcode
        notes = notes
        user_id = user_id
        is_deleted = is_deleted
        upload_by = upload_by
        upload_date = upload_date
        is_starred = is_starred

    def __repr__(self):
        return '<GbFile %r>' % self.file_display_name


class GbFileSchema(ma.ModelSchema):
    class Meta:
        model = GbFile
