from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func

from .auth import get_current_user
from ..database import get_db
from ..models.lead import Lead
from ..schemas import AdminStatsResponse

router = APIRouter(prefix='/api/admin')

@router.get('/stats', response_model=AdminStatsResponse)
async def get_admin_stats(current_user = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    if current_user.role != 'admin':
        raise HTTPException(status_code=403, detail='Not authorized')

    total_leads = await db.scalar(select(func.count()).select_from(Lead))
    total_customers = total_leads

    property_counts_result = await db.execute(
        select(Lead.property_type, func.count()).group_by(Lead.property_type)
    )
    property_type_counts = [
        {'property_type': row[0], 'count': row[1]}
        for row in property_counts_result.all()
    ]

    recent_leads = await db.execute(select(Lead).order_by(Lead.id.desc()).limit(5))
    recent = recent_leads.scalars().all()

    return {
        'total_leads': total_leads,
        'total_customers': total_customers,
        'property_type_counts': property_type_counts,
        'recent_leads': recent
    }
