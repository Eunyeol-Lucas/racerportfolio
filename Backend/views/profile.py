from flask import jsonify, Blueprint, request, abort
from werkzeug.utils import secure_filename
from models import User
from db_connect import db
from flask_jwt_extended import *
import random

# 프로필
bp = Blueprint('profile', __name__)


@bp.route('/profile', methods = ['GET', 'POST', 'PATCH'])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    if request.method == 'GET':
        
        try:
            user_profile = User.query.filter(User.id == user_id).first()
            user_info = User.to_dict(user_profile)
            return jsonify(user_info)
        
        except Exception as e:
            db.session.rollback()
            abort(400, {'error': str(e)})

    if request.method == 'PATCH':
        user_profile = User.query.filter(User.id == user_id).first()
        
        if request.json:
            data = request.json
            if not data:
                abort(404, 'No data')
            introduction = data["introduction"]
            username = data['username']
            user_profile.introduction = introduction
            user_profile.username = username
            try:
                db.session.commit()
                return jsonify({'result': 'success'})
            except Exception as e:
                db.session.rollback()
                abort(400, {'error': str(e)})
        
        if request.files['file']:
            data = request.files['file']
            if not data:
                abort(404, 'No data')
            file_location = './static/'+ str(random.random())+secure_filename(data.filename)
            data.save(file_location)
            

            user_profile.profile_image = file_location
        
            try:           
                db.session.commit()
                return jsonify({'result': 'success'})

            except Exception as e:
                db.session.rollback()
                abort(400, {'error': str(e)})
        
       
@bp.route('/profile/users', methods=["GET"])
@jwt_required()
def all_profile():
    result = []
    all_user = User.query.all()

    for i in all_user:
        data = User.to_dict(i)
        result.append(data)
    
    return jsonify(result)

@bp.route('/profile/users/<int:user_id>', methods=["GET"])
@jwt_required()
def user_info(user_id):



    pass


