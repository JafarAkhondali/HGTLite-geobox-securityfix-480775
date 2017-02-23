# _*_ coding: utf-8 _*_
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:111111@localhost:3306/geobox?charset=utf8'

db = SQLAlchemy(app)
ma = Marshmallow(app)

from box.model.user import User

# user1 = User(username=u"人间", email="837276086@qq.com")
# db.session.add(user1)
# db.session.commit()

from box.model.gb_suffix_bundle_model import GbSuffixBundle, GbSuffixBundleSchema

from box.controller import gb_suffix_bundle_controller as suffix1
from box.controller import aindex
from box.controller import user
