from flask import request, jsonify, Blueprint, session, g, Response
from models import *
from db_connect import db
from flask_bcrypt import Bcrypt
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
        if user is not None:
            id = user.id
            
            if bcrypt.check_password_hash(user.password, password):
                try:
                    access_token = create_access_token(identity = id, fresh=True)
                    refresh_token = create_refresh_token(identity=id)
                    return jsonify(
                        result="success",
                        access_token = access_token,
                        refresh_token = refresh_token
                        ), 200
                except Exception as e:
                    return jsonify({"error": "str(e)"})
            else:
                return jsonify(), 202
        else:
            return jsonify(), 202
    else:
        return jsonify(), 202

@log.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    access_token = create_access_token(identity=get_jwt_identity(), fresh=False)
    return jsonify(access_token=access_token)