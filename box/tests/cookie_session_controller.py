# _*_ coding: utf-8 _*_
from box import app
from flask import jsonify,request,make_response,session, redirect, url_for, escape

"""获取cookie"""
@app.route('/get/cookie/username')
def get_cookie_user():
    # 为None
    username = request.cookies.get('username')
    # 报错KeyError
    # username = request.cookies['username']
    print username
    return username

"""设置cookie"""
@app.route('/set/cookie/<username>')
def set_cookie_user(username):
    resp = make_response("setting cookies for username")
    resp.set_cookie('username', username)
    return resp

"""获取当前登录状态"""
@app.route('/session/index')
def session_index():
    if 'username' in session:
        return 'Logged in as %s' % escape(session['username'])
    return 'You are not logged in'

"""设置session"""
@app.route('/session/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('session_index'))
    return '''
        <form action="" method="post">
            <p><input type=text name=username>
            <p><input type=submit value=Login>
        </form>
    '''

@app.route('/session/logout')
def logout():
    # 如果会话中有用户名就删除它。
    session.pop('username', None)
    return redirect(url_for('index'))
