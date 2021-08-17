from flask import Flask
from db_connect import db
from flask_migrate import Migrate
from models import *
from api import board
from flask_cors import CORS


app = Flask(__name__)
app.register_blueprint(board)
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:dkssud@127.0.0.1:3306/racer_portfolio"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'asdasdasdasd'



db.init_app(app)
migrate = Migrate(app, db)

if __name__ == '__main__':
    app.run('0.0.0.0', 5000, debug=True)