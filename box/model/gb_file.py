# _*_ coding: utf-8 _*_
from box import db, ma

class GbFile(db.Model):
    __tablename__='gb_file'
    file_id=db.Column(db.String(96),primary_key=True)
    file_display_name=db.Column(db.String(
    file_real_name=db.Column(db.String(
    file_display_localtion=db.Column(db.String(
    file_real_location=db.Column(db.String(
    file_type=db.Column(db.String(
    file_size=db.Column(db.String(
    file_suffix=db.Column(db.String(
    file_tag=db.Column(db.String(
    is_public=db.Column(db.String(
    create_date=db.Column(db.String(
    create_by=db.Column(db.String(
    update_date=db.Column(db.String(
    update_by=db.Column(db.String(
    file_hashcode=db.Column(db.String(
    notes=db.Column(db.String(
