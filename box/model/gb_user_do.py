# _*_ coding: utf-8 _*_
from box import db, ma

class GbUser(db.Model):
    __tablename__ = 'gb_user'
    user_id = db.Column(db.String(96), primary_key=True)
    user_name = db.Column(db.String(48))
    user_nickname = db.Column(db.String(96))
    user_password = db.Column(db.String(512))
    user_type = db.Column(db.Integer)
    user_tel = db.Column(db.String(24))
    user_email = db.Column(db.String(48))
    notes = db.Column(db.String(512))
    create_date = db.Column(db.DateTime)
    create_by = db.Column(db.String(96))
    update_date = db.Column(db.DateTime)
    update_by = db.Column(db.String(96))
    is_deleted = db.Column(db.Integer)
    user_avatar = db.Column(db.String(512))

    def __init__(self, user_id, user_name, user_nickname, user_password, user_type, user_tel,
                 user_email, notes, create_date, create_by, update_date, update_by,
                 is_deleted, user_avatar):
        self.user_id = user_id
        self.user_name = user_name
        self.user_nickname = user_nickname
        self.user_password = user_password
        user_type = user_type
        user_tel = user_tel
        user_email = user_email
        notes = notes
        create_date = create_date
        create_by = create_by
        update_date = update_date
        update_by = update_by
        is_deleted = is_deleted
        user_avatar = user_avatar

    def __repr__(self):
        return '<GbUser %r>' % self.user_nickname


class GbUserSchema(ma.ModelSchema):
    class Meta:
        model = GbUser
