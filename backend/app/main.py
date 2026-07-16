from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import engine
from .models.base import Base

# Import models so SQLAlchemy registers them
from .models import Lead, User, Admin

from .routers import auth, health, leads, admin, admin_stats


@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield


app = FastAPI(
    title="Sawariya Solar API",
    description="Backend for quote submissions and admin data management.",
    version="0.1.0",
    lifespan=lifespan,
)

allow_origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
]

import os

if env_origins := os.getenv("ALLOW_ORIGINS"):
    allow_origins += [
        origin.strip()
        for origin in env_origins.split(",")
        if origin.strip()
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allow_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(leads.router)
app.include_router(auth.router)
app.include_router(admin.router)
app.include_router(admin_stats.router)