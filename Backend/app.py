from flask import Flask, request, jsonify
from db_connect import db
from flask_migrate import Migrate
from models import *
from api import board
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import *
from apis import profile, register, login

bcrypt = Bcrypt()

app = Flask(__name__)
app.register_blueprint(board)
app.register_blueprint(profile.prop)
app.register_blueprint(register.reg)
app.register_blueprint(login.log)
jwt = JWTManager(app)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:dkssud@127.0.0.1:3306/racer-portfolio"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'asdasdasdasd'

app.config.update(
			DEBUG = True,
			JWT_SECRET_KEY = "I'm your nyeol"
		)

        
db.init_app(app)
migrate = Migrate(app, db)


if __name__ == '__main__':
    app.run('0.0.0.0', 5000, debug=True)