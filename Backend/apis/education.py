from flask import request, jsonify, Blueprint
from models import Education
from db_connect import db
from flask_jwt_extended import *

edu = Blueprint('edu', __name__)
# 학력 사항
@edu.route('/edu', methods=['GET', "POST", "PATCH", "DELETE"])
@jwt_required()
def education():
    user_id = get_jwt_identity()
    # 메인페이지에 접속할 경우 저장된 education 정보를 요청
    if request.method == "GET":
        try:
            user_education = Education.query.filter(Education.user_id == user_id).all()
            education_list = [
                {
                    'id': education.id,
                    'name': education.name,
                    'major': education.major,
                    'status': education.status
                } for education in user_education
            ]
            return jsonify(education_list)
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)})
    # 1개 이상의 education 정보 data를 Education db에 저장 요청
    if request.method == "POST":
        data = request.json

        for datum in data["education_list"]:
            school = datum['school']
            major = datum['major']
            status = datum['status']
        try:
            education_list = Education(
                user_id = user_id,
                school = school,
                major = major,
                status = status
            )
            db.session.add(education_list)
            db.session.commit()
            return jsonify(), 200
        
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)})
    # 데이터 수정 요청
    if request.method == "PATCH":
        data = request.json
        try:
            for datum in data['education_list']:
                id = datum['id']
                school = datum['school']
                major = datum['major']
                status = datum['status']
                
                user_edu = Education.query.filter(Education.id == id).first()
                
                user_edu.school = school
                user_edu.major = major
                user_edu.edu_status = status
            
            db.session.commit()
            return jsonify(), 200

        except Exception as e:
            db.session.rollback()

            return jsonify({'error': str(e)})
    # education data 삭제 요청
    if request.method == "DELETE":
        data = request.json
        try:
            id = data['id']
            user_education = Education.query.filter(Education.id == id).first()

            db.session.delete(user_education)
            db.session.commit()

            return jsonify(), 200
        except Exception as e:
            db.session.rollback()
            
            return jsonify({'error': str(e)})