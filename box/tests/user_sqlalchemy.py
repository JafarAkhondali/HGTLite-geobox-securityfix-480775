# _*_ coding: utf-8 _*_
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:111111@localhost:3306/geobox?charset=utf8'
db = SQLAlchemy(app)
ma = Marshmallow(app)


class User(db.Model):
    """
    定义了三个字段， 数据库表名为model名小写
    """
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)

    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return '<User %r>' % self.username

    def save(self):
        db.session.add(self)
        db.session.commit()


class UserSchema(ma.ModelSchema):
    class Meta:
        model = User


user1 = User(username=u'人间', email="837276086@qq.com")
db.session.add(user1)
db.session.commit()

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
