from flask import session, jsonify, Blueprint, request, abort
from werkzeug.utils import secure_filename
from models import Profile, User
from db_connect import db
from flask_jwt_extended import *

# 프로필
bp = Blueprint('profile', __name__)

@bp.route('/profile', methods = ['GET', 'POST', 'PATCH'])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    if request.method == 'GET':
        try:
            user_profile = Profile.query.filter(Profile.user_id == user_id).first()
            user_name = User.query.filter(User.user_id == user_id).first().username
            user_profile_info = {
                'image': user_profile.image,
                'introduction': user_profile.introduction,
                'name': user_name
            }
            return jsonify(user_profile_info)
        
        except:
            return jsonify({'result': 'fail'})

    if request.method == 'POST':
        data = request.files['file']
        if not data:
            abort(400, 'No data')

        filename = secure_filename(data.filename)
        mimetype = data.mimetype
        img = Profile(profile_image=data.read(), mimetype=mimetype, name=filename, user_id=user_id)
        db.session.add(img)
        try:
            db.session.commit()
            return jsonify({'result': 'success'})
            # image = data['image']
            # introduction = data['introduction']

            # profile = Profile(
            #         user_id = user_id,
            #         image = data,
            #         # introduction = introduction
            #     )
            # db.session.add(profile)
            # db.session.commit()
            # return jsonify({'result':'success'})
            
        except Exception as e:
            db.session.rollback()
            abort(400, {'error': str(e)})


    if request.method == 'PATCH':
        user_profile = Profile.query.filter(Profile.user_id == user_id).first()
        
        data = request.get_json()
        
        image = data['image']
        introduction = data['introduction']

        user_profile.image = image
        user_profile.introduction = introduction
        try:           
            db.session.commit()
            return jsonify({'result': 'success'})

        except Exception as e:
            db.session.rollback()
            abort(400, {'error': str(e)})

