"""empty message

Revision ID: 3aa6092b19fb
Revises: f80fcbf8ad4a
Create Date: 2021-08-22 04:32:17.584421

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '3aa6092b19fb'
down_revision = 'f80fcbf8ad4a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('profiles', 'profile_image',
               existing_type=mysql.TEXT(collation='utf8mb4_unicode_ci'),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('profiles', 'profile_image',
               existing_type=mysql.TEXT(collation='utf8mb4_unicode_ci'),
               nullable=True)
    # ### end Alembic commands ###