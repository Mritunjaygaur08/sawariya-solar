from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ..auth.jwt import create_access_token
from ..auth.security import verify_password
from ..database import get_db
from ..models.user import User

router = APIRouter(prefix='/api')
oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/api/auth/token')

async def get_current_user(token: str = Depends(oauth2_scheme), db: AsyncSession = Depends(get_db)):
    from jose import jwt, JWTError
    from ..auth.jwt import SECRET_KEY, ALGORITHM

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get('sub')
        if email is None:
            raise HTTPException(status_code=401, detail='Could not validate credentials')
    except JWTError:
        raise HTTPException(status_code=401, detail='Could not validate credentials')

    result = await db.execute(select(User).where(User.email == email))
    user = result.scalar_one_or_none()
    if user is None:
        raise HTTPException(status_code=401, detail='Could not validate credentials')
    return user

@router.post('/auth/token')
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.email == form_data.username))
    user = result.scalar_one_or_none()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail='Incorrect email or password')

    access_token = create_access_token({'sub': user.email})
    return {'access_token': access_token, 'token_type': 'bearer'}

@router.get('/auth/me')
async def read_users_me(current_user: User = Depends(get_current_user)):
    return {'email': current_user.email, 'full_name': current_user.full_name, 'role': current_user.role}
