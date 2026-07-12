FROM python:3.12-slim
WORKDIR /app
COPY backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY backend ./backend
EXPOSE 8000
ENV PYTHONUNBUFFERED=1
ENV DATABASE_URL="postgresql+asyncpg://user:password@localhost:5432/sawariya_solar"
ENV SECRET_KEY="change-this-secret-key"
CMD ["uvicorn", "backend.app.main:app", "--host", "0.0.0.0", "--port", "8000"]
