from flask import redirect, request, render_template, jsonify, Blueprint, session, g, Response
from models import User
from db_connect import db
from flask_bcrypt import Bcrypt
from flask_cors import CORS

board = Blueprint('board', __name__)
CORS(board)
bcrypt = Bcrypt()


@board.route("/register", methods=["POST"])
def register():
    data = request.json

    id = data["id"]
    user_info = User.query.filter(User.userid == id).first()
    if user_info:
        return Response("이미 존재하는 Username입니다", status=400)
    password = data["password"]
    username = data["username"]
    pw_hash = bcrypt.generate_password_hash(password).decode()
    
    user = User(username = username, userid=id, password=pw_hash)
    db.session.add(user)
    db.session.commit()
    
    return redirect("/")

        