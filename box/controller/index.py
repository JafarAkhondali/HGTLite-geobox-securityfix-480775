# _*_ coding: utf-8 _*_
from box import app
from flask import render_template


@app.route('/')
def open_url_index():
    return render_template('dist/index.html')
