from flask import jsonify, Blueprint, request, abort
from werkzeug.utils import secure_filename
from models import *
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
        

# 클라이언트 메인페이지 접속시 유저 정보 요청
@bp.route('/profile/users', methods=["GET"])
@jwt_required()
def all_profile():
    all_user = User.query.all()
    result_list = [User.to_dict(user) for user in all_user ]
    
    return jsonify(result_list)


@bp.route('/profile/users/<int:user_id>', methods=["GET"])
@jwt_required()
def user_information(user_id):
    user = User.query.filter(User.id == user_id).first()
    users = User.to_dict(user)
    
    def data_table(Table):
        return Table.query.filter(Table.user_id == user_id).all()

    project_list = [ 
        Project.to_dict(project) for project in data_table(Project)
    ]
    education_list = [
        Education.to_dict(education) for education in data_table(Education)
    ]
    award_list = [
        Award.to_dict(award) for award in data_table(Award)
    ]
    certificate_list = [
        Certification.to_dict(certificate) for certificate in data_table(Certification)
    ]
    

    

    return jsonify({"users" : users, "project_list": project_list, "education_list": education_list, "award_list": award_list, "certificate_list": certificate_list})


