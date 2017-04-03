# _*_ coding: utf-8 _*_
from box import geobox
from flask import render_template


@geobox.route('/')
def open_url_index():
    return render_template('dist/index.html')

@geobox.route('/<path:path>')
def static_file(path):
    return geobox.send_static_file(path)
