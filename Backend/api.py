from flask import redirect, request, render_template, jsonify, Blueprint, session, g, Response
from models import User
from db_connect import db
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from datetime import datetime, timedelta
import jwt

board = Blueprint('board', __name__)
CORS(board)
bcrypt = Bcrypt()

encryption_secret = "secret_nyeol"
algorithm ='HS256'

@board.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.json

        userid = data['userId']
        password = data['password']
        user = User.query.filter(User.userid == userid).first()
        if user is not None:
            if bcrypt.check_password_hash(user.password, password):
                data_to_encode = {"id" : userid, "password" : password, 'exp': datetime.utcnow() + timedelta(seconds=60)}
                jwt_token = jwt.encode(data_to_encode, encryption_secret, algorithm)
                return jsonify(result="success", data={'token': jwt_token})
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

        