from flask import request, jsonify, Blueprint, abort
from models import Project
from db_connect import db
from flask_jwt_extended import *

bp=Blueprint('project', __name__, url_prefix='/api')

@bp.route('/project', methods = ['GET', 'POST', 'PATCH', 'DELETE'])
@jwt_required()
def awards():
    user_id = get_jwt_identity()
    # 메인 페이지에 접속할 경우 Award table에 저장된 학령사항 정보 요청
    if request.method == 'GET':
        try:
            user_projects = Project.query.filter(Project.user_id == user_id).all()

            projects_list = [
                Project.to_dict(project) for project in user_projects
            ]
            return jsonify(projects_list), 200

        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)})

    # 1개의 awards 정보 data를 Award db에 저장 요청
    if request.method == 'POST':
        
        data = request.json
        
        title = data['title']
        content = data['content']
        date1 = data['startDate'][:10]
        date2 = data['endDate'][:10]
        
        user_project = Project(title = title, content = content, 
            start_date = date1, end_date = date2, user_id = user_id)

        db.session.add(user_project)
        try:
            db.session.commit()
            return jsonify({'result': 'success'})

        except Exception as e:
            print(e)
            db.session.rollback()
            
            abort(400, {'error': str(e)})

    # Award 데이터 수정 요청 
    if request.method == 'PATCH':
        try:
            data = request.json
            for list in data['projects_list']:
                project_id = list['id']
                title = list['title']
                content = list['content']
                start_date = list['start_date']
                end_date = list['end_date']

                user_project = Project.query.filter(Project.id == project_id).first()
                user_project.title = title
                user_project.content = content
                user_project.start_date = start_date
                user_project.end_date = end_date
            
            db.session.commit()
            return jsonify({'result': 'success'})

        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)})

    # Award data 삭제 요청
    if request.method == 'DELETE':
        data = request.json
        try:
            project_id = data['id']
            user_project = Project.query.filter(Project.id == project_id).first()

            db.session.delete(user_project)
            db.session.commit()
            return jsonify()
            
        except Exception as e:
            db.session.rollback()
            return jsonify({'error': str(e)})
