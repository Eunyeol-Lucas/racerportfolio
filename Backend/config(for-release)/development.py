from config.default import *
from datetime import timedelta

SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:dkssud@127.0.0.1:3306/racer-portfolio?charset=utf8mb4"
SQLALCHEMY_TRACK_MODIFICATIONS = 1
secret_key = 'elice_racer_portfolio'

JWT_SECRET_KEY = "super-secret"  # Change this!
JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=30)
