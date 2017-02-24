# _*_ coding: utf-8 _*_
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:111111@localhost:3306/geobox?charset=utf8'

db = SQLAlchemy(app)
ma = Marshmallow(app)

from box.model.gb_suffix_bundle_do import GbSuffixBundle, GbSuffixBundleSchema
from box.model.gb_file_do import GbFile, GbFileSchema

from box.controller import index
from box.controller import gb_suffix_bundle_controller
from box.controller import gb_file_controller
