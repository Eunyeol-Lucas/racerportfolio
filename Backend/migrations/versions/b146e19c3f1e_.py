"""empty message

Revision ID: b146e19c3f1e
Revises: 7b9678dc9fce
Create Date: 2021-08-21 03:48:00.657458

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'b146e19c3f1e'
down_revision = '7b9678dc9fce'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('certifications',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('certified_by', sa.String(length=100), nullable=False),
    sa.Column('certified_date', sa.Date(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('certificates')
    op.add_column('educations', sa.Column('status', sa.Integer(), nullable=True))
    op.drop_column('educations', 'state')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('educations', sa.Column('state', mysql.INTEGER(), autoincrement=False, nullable=True))
    op.drop_column('educations', 'status')
    op.create_table('certificates',
    sa.Column('id', mysql.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('user_id', mysql.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('name', mysql.VARCHAR(length=100), nullable=False),
    sa.Column('certified_by', mysql.VARCHAR(length=100), nullable=False),
    sa.Column('certified_date', sa.DATE(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name='certificates_ibfk_1'),
    sa.PrimaryKeyConstraint('id'),
    mysql_collate='utf8mb4_0900_ai_ci',
    mysql_default_charset='utf8mb4',
    mysql_engine='InnoDB'
    )
    op.drop_table('certifications')
    # ### end Alembic commands ###