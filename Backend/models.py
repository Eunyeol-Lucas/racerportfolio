from enum import unique
from db_connect import db
from datetime import datetime

# 사용자 정보
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
    
    profiles = db.relationship("Profile", backref="user", lazy=True)
    educations = db.relationship("Education", backref="user", lazy=True)
    awards = db.relationship("Award", backref="user", lazy=True)
    projects = db.relationship("Project", backref="user", lazy=True)
    certifications = db.relationship("Certification", backref="user", lazy=True)


# 사용자 프로필
class Profile(db.Model):
    __tablename__   = "profiles"
    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id         = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    profile_image   = db.Column(db.String(100), default='default.png')
    introduction    = db.Column(db.String(100))

# 사용자 학력 사항
class Education(db.Model):
    __tablename__   = "educations"
    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id         = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    school          = db.Column(db.String(100), nullable=False)
    major           = db.Column(db.String(100), nullable=False)
    status          = db.Column(db.Integer)

# 사용자 수상 내역
class Award(db.Model):
    __tablename__   = "awards"
    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id         = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    awards          = db.Column(db.String(255))
    description     = db.Column(db.String(255))    

# 사용자 프로젝트 내역
class Project(db.Model):
    __tablename__   = "projects"
    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id         = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title           = db.Column(db.String(255), nullable=False) 
    content         = db.Column(db.String(255), nullable=False) 
    start_date      = db.Column(db.Date, nullable=False)
    end_date        = db.Column(db.Date, nullable=False)

# 사용자 자격 정보
class Certification(db.Model):
    __tablename__   = "certifications"
    id              = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    user_id         = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name            = db.Column(db.String(100), nullable=False)
    certified_by    = db.Column(db.String(100), nullable=False)
    certified_date  = db.Column(db.Date, nullable=False)


