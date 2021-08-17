from flask import redirect, request, render_template, jsonify, Blueprint, session, g, Response
from models import User
from db_connect import db
from flask_bcrypt import Bcrypt
from flask_cors import CORS

board = Blueprint('board', __name__)
CORS(board)
bcrypt = Bcrypt()

@board.route("/login", methods=['GET', 'POST'])
def login():
    if session.get('login') is None:
        data = request.json

        userid = data['userId']
        password = data['password']
        user = User.query.filter(User.userid == userid).first()
        if user is not None:
            if bcrypt.check_password_hash(user.password, password):
                session['login'] = user.id
                return jsonify({"result": "success", "userid": user.id, "username":user.username})
            else:
                return jsonify({"result": "fail"})
        else:
            return jsonify({"result": "fail"})
    else:
        return jsonify({"result": "success"})


@board.route("/register", methods=['GET', "POST"])
def register():
    data = request.json

    id = data["id"]
    user_info = User.query.filter(User.userid == id).first()
    if user_info:
        return jsonify({"result": "fail"})
    password = data["password"]
    username = data["username"]
    pw_hash = bcrypt.generate_password_hash(password).decode()
    
    user = User(username = username, userid=id, password=pw_hash)
    db.session.add(user)
    db.session.commit()
    
    return jsonify({"result": "success"})

        