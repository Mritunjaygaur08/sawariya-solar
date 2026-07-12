# Sawariya Solar

This repository contains a Next.js frontend and a FastAPI backend.

## Local development

### Frontend
1. `npm install`
2. `npm run dev`

### Backend
1. `cd backend`
2. `python -m venv .venv`
3. `./.venv/Scripts/Activate.ps1`
4. `pip install -r requirements.txt`
5. `uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`

### Available scripts
- `npm run dev` - start frontend locally
- `npm run build` - build frontend
- `npm run start` - start frontend production server
- `npm run lint` - run Next.js linter
- `npm run backend` - start backend in dev mode
- `npm run backend:prod` - start backend without reload

## Deployment

### Docker Compose
1. Create a `.env` file with:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/sawariya_solar
SECRET_KEY=replace-with-a-secret
ALLOW_ORIGINS=http://localhost:3000
```

2. Run:

```bash
docker compose up --build
```

### Production hosting recommendations
- Frontend: Vercel, Netlify, or similar
- Backend: Render, Railway, Fly.io, Azure App Service

## Environment variables
- `NEXT_PUBLIC_API_URL` - backend API base URL for frontend
- `DATABASE_URL` - database connection string for FastAPI
- `SECRET_KEY` - JWT signing key for backend
- `ALLOW_ORIGINS` - comma-separated allowed frontend origins for CORS
