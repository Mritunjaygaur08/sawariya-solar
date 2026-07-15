from pydantic import BaseModel, EmailStr
from pydantic import ConfigDict

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

class YourSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
