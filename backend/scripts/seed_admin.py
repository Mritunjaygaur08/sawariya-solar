"""
Seed script to create an initial admin user for development.
Defaults to a local SQLite DB at backend/dev.db unless DATABASE_URL env var is set.
"""
import os
import sys
from pathlib import Path
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

WORKSPACE_ROOT = Path(__file__).resolve().parents[2]
if str(WORKSPACE_ROOT) not in sys.path:
    sys.path.insert(0, str(WORKSPACE_ROOT))

from backend.app.models.base import Base
from backend.app.models.user import User
from backend.app.auth.security import get_password_hash

BACKEND_ROOT = Path(__file__).resolve().parents[1]
DB_PATH = BACKEND_ROOT / 'dev.db'
DB_PATH.parent.mkdir(parents=True, exist_ok=True)
DB_URL = os.getenv('DATABASE_URL', f'sqlite:///{DB_PATH}')

# For SQLite the driver is sqlite:///, for Postgres the env should be like postgresql+asyncpg://...
# Use a sync engine here for simplicity; if DATABASE_URL is an async URL this script will exit.
if DB_URL.startswith('postgresql+asyncpg') or DB_URL.startswith('postgresql+async'):
    print('DATABASE_URL is an async Postgres URL. For seeding with Postgres, run a separate script or set DATABASE_URL to a sqlite URL for local dev.')
    raise SystemExit(1)

engine = create_engine(DB_URL, echo=False, future=True)
SessionLocal = sessionmaker(bind=engine)

def main():
    print('Creating database tables (if not exist)...')
    Base.metadata.create_all(bind=engine)

    session = SessionLocal()
    admin_email = os.getenv('ADMIN_EMAIL', 'admin@sawariyasolar.com')
    admin_password = os.getenv('ADMIN_PASSWORD', 'ChangeMe123!')

    existing = session.query(User).filter(User.email == admin_email).first()
    if existing:
        print(f'Admin user already exists: {admin_email}')
        return

    hashed = get_password_hash(admin_password)
    admin = User(email=admin_email, hashed_password=hashed, full_name='Sawariya Admin', role='admin')
    session.add(admin)
    session.commit()
    print(f'Created admin user: {admin_email} with password from ADMIN_PASSWORD env (default used if not set)')

if __name__ == '__main__':
    main()
