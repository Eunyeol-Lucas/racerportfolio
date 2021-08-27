"""empty message

Revision ID: ac946c28394f
Revises: cb30595f3fab
Create Date: 2021-08-26 15:52:29.918196

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ac946c28394f'
down_revision = 'cb30595f3fab'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_foreign_key(None, 'awards', 'user', ['user_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'awards', type_='foreignkey')
    # ### end Alembic commands ###