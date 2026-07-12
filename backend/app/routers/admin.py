from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from .auth import get_current_user
from ..database import get_db
from ..models.lead import Lead
from ..schemas import LeadResponse

router = APIRouter(prefix='/api/admin')

@router.get('/leads', response_model=list[LeadResponse])
async def admin_list_leads(current_user = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    if current_user.role != 'admin':
        raise HTTPException(status_code=403, detail='Not authorized')
    result = await db.execute(select(Lead).order_by(Lead.id.desc()))
    return result.scalars().all()
