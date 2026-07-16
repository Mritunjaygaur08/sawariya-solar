from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import insert, select

from ..database import get_db
from ..models.lead import Lead
from ..schemas import LeadCreate, LeadResponse
from ..utils.email import send_lead_notification

router = APIRouter(prefix='/api')

@router.post('/leads', response_model=LeadResponse)
async def submit_lead(lead: LeadCreate, db: AsyncSession = Depends(get_db)):
    query = insert(Lead).values(
        name=lead.name,
        email=lead.email,
        phone=lead.phone,
        address=lead.address,
        monthly_bill=lead.monthly_bill,
        property_type=lead.property_type,
        message=lead.message
    ).returning(Lead)
    result = await db.execute(query)
    await db.commit()
    created = result.scalar_one()

    lead_payload = {
        'name': created.name,
        'email': created.email,
        'phone': created.phone,
        'address': created.address,
        'monthly_bill': created.monthly_bill,
        'property_type': created.property_type,
        'message': created.message or ''
    }

    try:
        send_lead_notification(lead_payload)
    except Exception:
        pass

    return created

@router.get('/leads', response_model=list[LeadResponse])
async def list_leads(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Lead).order_by(Lead.id.desc()))
    return result.scalars().all()
