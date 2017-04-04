# _*_ coding: utf-8 _*_
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from werkzeug.contrib.fixers import ProxyFix

def create_app():
  # 这个工厂方法可以从你的原有的 `__init__.py` 或者其它地方引入。
  app = Flask(__name__)
  return app

geobox = create_app()
geobox.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:111111@localhost:3306/geobox?charset=utf8'
geobox.config['SQLALCHEMY_TRACK_MODIFICATIONS']=True
# 设置session加密key
geobox.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

# geobox.wsgi_app = ProxyFix(geobox.wsgi_app)

db = SQLAlchemy(geobox)
ma = Marshmallow(geobox)

from box.model.gb_suffix_bundle_do import GbSuffixBundle, GbSuffixBundleSchema
from box.model.gb_file_do import GbFile, GbFileSchema
from box.model.gb_file_dir_do import GbFileDir, GbFileDirSchema

from box.domain.login_result_dto import LoginResult,LoginResultSchema

from box.controller import index
from box.controller import gb_suffix_bundle_controller
from box.controller import gb_file_controller
from box.controller import gb_file_dir_controller
from box.controller import gb_file_raster_controller
from box.controller import gb_file_vector_controller

from box.controllers import file_upload_controller
from box.controllers import file_by_user_controller
from box.controllers import file_edit_controller
from box.controllers import file_extent_controller
from box.controllers import user_account_controller

from box.tests import cookie_session_controller
