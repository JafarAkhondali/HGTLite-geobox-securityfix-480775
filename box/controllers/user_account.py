from box import app
from flask import render_template
from box.constant.version import pyconst.VERSION as VERSION

@app.route(VERSION +'/user/login')
def open_url_index():
    return render_template('dist/index.html')
