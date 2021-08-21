from flask_restful import Resource, reqparse
from flask import session, jsonify, Blueprint, request
from models import Profile, User
from db_connect import db
from flask_jwt_extended import *

# 프로필
prop = Blueprint('prop', __name__)

@prop.route('/profile', methods=["GET", "POST", "PATCH"])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    if request.method == "GET":
        try:
            user_profile = Profile.query.filter(Profile.user_id == user_id).first()
            user_name = User.query.filter(User.user_id == user_id).first().username
            user_profile_info = {
                'image': user_profile.image,
                'introduction': user_profile.introduction,
                'name': user_name
            }
            return jsonify(user_profile_info), 200
        
        except:
            return jsonify({"result": "fail"})

    if request.method =="POST":
        try:
            data = request.files['file']
            # return jsonify({"result":data})
            # image = data["image"]
            # introduction = data["introduction"]

            profile = Profile(
                    user_id = user_id,
                    image = data,
                    # introduction = introduction
                )
            db.session.add(profile)
            db.session.commit()
            return jsonify({"result":"success"})
            
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)})

    if request.method == "PATCH":
        try:
            user_profile = Profile.query.filter(Profile.user_id == user_id).first()
            
            data = request.get_json()
            
            image = data["image"]
            introduction = data["introduction"]

            user_profile.image = image
            user_profile.introduction = introduction
            
            db.session.commit()

            return jsonify({"result": "success"})

        except Exception as e:
            db.session.rollback()
            
            return jsonify({'error': str(e)})

