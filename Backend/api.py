from flask import redirect, request, render_template, jsonify, Blueprint, session, g
from models import User
from db_connect import db
from flask_bcrypt import Bcrypt

board = Blueprint('board', __name__)
bcrypt = Bcrypt()

# @board.before_app_request
# def load_logged_in_user():
#     user_id = session.get('login')
#     if login is None:
#         g.user = None
#     else:
#         g.user = db.session.query(User).filter(User.id == user_id).first()

@board.route("/join", methods=["GET", "POST"])
def join():
    if session.get("login") is None:
        if request.method == 'GET':
            return render_template('join.html')
        else:
            userid = request.form['user_id']
            password = request.form['user_pw']
            pw_hash = bcrypt.generate_password_hash(password).decode()

            user = User.query.filter(User.userid == userid).first()
            if user is not None:
                return jsonify({"result": "id_check"})
            if len(password) < 6:
                return jsonify({"result": "pw_check"})
            user = User(userid, pw_hash)
            db.session.add(user)
            db.session.commit()
            return jsonify({"result": "success"})
    else:
        return redirect("/")