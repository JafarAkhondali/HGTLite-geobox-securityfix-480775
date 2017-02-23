# _*_ coding: utf-8 _*_
from box import app
from flask import jsonify
from box.model import user


@app.route('/user')
def get_all_user():
    print '===before'
    all_user = user.User.query.all()
    user_schema = user.UserSchema()
    print '===after'
    return all_user[7].username
    # return all_user[(len(all_user) - 1)].username
    # return jsonify(user_schema.dump(all_user[(len(all_user) - 1)]).data).encode('utf-8')

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', debug=True)
