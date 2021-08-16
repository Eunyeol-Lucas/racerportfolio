from db_connect import db
from datetime import datetime

class User(db.Model):
    __tablename__ = 'user'
    id      = db.Column(db.Integer,  primary_key=True, nullable=False, autoincrement=True)
    userid = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(64), nullable=False)
    username = db.Column(db.String(32), nullable=False)

    def __init__(self, userid, password, username):
        self.userid = userid
        self.password = password
        self.username = username

