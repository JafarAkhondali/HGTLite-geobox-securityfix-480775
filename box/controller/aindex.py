# _*_ coding: utf-8 _*_
from box import app


@app.route('/')
def hello():
    return '<h1>index 首页26</h1>'
