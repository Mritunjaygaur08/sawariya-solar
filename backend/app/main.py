from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import auth, health, leads, admin

app = FastAPI(
    title='Sawariya Solar API',
    description='Backend for quote submissions and admin data management.',
    version='0.1.0'
)

allow_origins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001'
]

if env_origins := __import__('os').getenv('ALLOW_ORIGINS'):
    allow_origins += [origin.strip() for origin in env_origins.split(',') if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allow_origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

app.include_router(health.router)
app.include_router(leads.router)
app.include_router(auth.router)
app.include_router(admin.router)
