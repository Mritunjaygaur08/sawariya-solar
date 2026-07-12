from pydantic import BaseModel, EmailStr

class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    address: str
    monthly_bill: str
    property_type: str
    message: str | None = None

class LeadResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str
    address: str
    monthly_bill: str
    property_type: str
    message: str | None

    class Config:
        orm_mode = True
