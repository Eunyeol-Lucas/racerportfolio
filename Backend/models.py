from enum import unique
from db_connect import db
from datetime import datetime

class User(db.Model):
    __tablename__   = 'user'
    id              = db.Column(db.Integer,  primary_key=True, nullable=False, autoincrement=True)
    username        = db.Column(db.String(32), nullable=False)
    userid          = db.Column(db.String(100), nullable=False, unique=True)
    password        = db.Column(db.String(64), nullable=False)

    def __init__(self, userid, username, password):
        self.username   = username
        self.userid     = userid
        self.password   = password

class Profile(db.Model):
    __tablename__   = "Profile"
    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id         = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    profile_image   = db.Column(db.String(100), default='default.png')
    introduction    = db.Column(db.String(100))

class Education(db.Model):
    __tablename__   = "Education"
    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id         = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    school          = db.Column(db.String(100), nullable=False)
    major           = db.Column(db.String(100), nullable=False)
    state           = db.Column(db.Integer)

class Awards(db.Model):
    __tablename__   = "Awards"
    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id         = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    awards          = db.Column(db.String(255))
    description     = db.Column(db.String(255))    

class Projects(db.Model):
    __tablename__   = "Projects"
    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id         = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title           = db.Column(db.String(255), nullable=False) 
    content         = db.Column(db.String(255), nullable=False) 
    start_date      = db.Column(db.Date, nullable=False)
    end_date        = db.Column(db.Date, nullable=False)

class Certificates(db.Model):
    __tablename__   = "Certificates"
    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id         = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name            = db.Column(db.String(100), nullable=False)
    certified_by    = db.Column(db.String(100), nullable=False)
    certified_date  = db.Column(db.Date, nullable=False)


