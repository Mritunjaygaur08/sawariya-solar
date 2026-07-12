from sqlalchemy import Column, Integer, String, Text
from .base import Base

class Lead(Base):
    __tablename__ = 'leads'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    phone = Column(String(50), nullable=False)
    address = Column(String(255), nullable=False)
    monthly_bill = Column(String(50), nullable=False)
    property_type = Column(String(80), nullable=False)
    message = Column(Text, nullable=True)
