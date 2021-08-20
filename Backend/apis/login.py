from flask import request, jsonify, Blueprint, session, g, Response
from models import *
from db_connect import db
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import *

log = Blueprint('log', __name__)

bcrypt = Bcrypt()

# 로그인
@log.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return jsonify({"result": "GET"})

    if request.method == 'POST':
        data = request.json
        
        userid = data['userId']
        password = data['password']
        user = User.query.filter(User.userid == userid).first()
        user_id = user.id
        if user is not None:
            if bcrypt.check_password_hash(user.password, password):

                session.clear()
                session['login'] = user_id
                return jsonify(
			        result = "success",
			        token = {"userid": user_id, "access_token": create_access_token(identity = user_id, expires_delta = False)
                    })
                 
            else:
                return jsonify({"result": "fail"})
        else:
            return jsonify({"result": "fail"})
    else:
        return jsonify({"result": "stop"})