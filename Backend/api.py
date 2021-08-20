from flask import redirect, request, render_template, jsonify, Blueprint, session, g, Response
from models import *
from db_connect import db
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from datetime import datetime, timedelta
from functools import wraps
from flask_jwt_extended import *

board = Blueprint('board', __name__)
CORS(board)

bcrypt = Bcrypt()


@board.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.json
        
        userid = data['userId']
        password = data['password']
        user = User.query.filter(User.userid == userid).first()
        user_id = user.id
        if user is not None:
            if bcrypt.check_password_hash(user.password, password):

                session.clear()
                session['user_id'] = user_id
                return jsonify(
			        result = "success",
			        token = {"userid": user_id, "access_token": create_access_token(identity = user_id, expires_delta = False)
                    })
                 
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


@board.route('/user', methods=["GET", "POST"])
@jwt_required()
def user_only():
    cur_user = get_jwt_identity()
    if cur_user is None:
        return jsonify({"result": "bad"})
    else:
        return jsonify(cur_user)

@board.route('/main', methods=["POST"])
@jwt_required()
def mainpage():
    try: 
        data = request.get_json()
        id = data["userid"]
        user = User.query.filter(User.id==id).first()
        if user:
            profile_user =  Profile.query.filter(Profile.user_id==id).first()
            if profile_user is None:
                profile_user =  Profile(user_id=id)
                db.session.add(profile_user)
                db.session.commit()
                return jsonify({"result": "success"})  
            else:
                return jsonify({"result": "already" })
        else:
            return jsonify({"result": "AGAIN"})  
    except:
        return jsonify({"result": "wrong"})    



