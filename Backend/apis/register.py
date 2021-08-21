from flask import request, Blueprint, jsonify
from flask_bcrypt import Bcrypt
from models import *

reg = Blueprint('reg', __name__)
bcrypt = Bcrypt()

# 회원가입 
@reg.route("/register", methods=['GET', "POST"])
def register():
    data = request.json

    id = data["id"]
    user_info = User.query.filter(User.userid == id).first()
    if user_info:
        return jsonify({"result": "fail"})
    password = data["password"]
    username = data["username"]
    pw_hash = bcrypt.generate_password_hash(password).decode()
    
    try:
        user = User(username = username, userid=id, password=pw_hash)
        db.session.add(user)
        db.session.commit()
        
        return jsonify({"result": "success"})

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "str(e)"})