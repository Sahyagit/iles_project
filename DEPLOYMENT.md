# ILES Deployment Guide
## VPS: 69.164.245.17 (Safe deployment alongside existing systems)

## Port Used: 8080 (does not conflict with existing services)

---

## Step 1 — SSH into your VPS
```bash
ssh root@69.164.245.17
```

## Step 2 — Install Docker and Docker Compose (if not installed)
```bash
apt-get update
apt-get install -y docker.io docker-compose
systemctl start docker
systemctl enable docker
```

## Step 3 — Clone the project
```bash
cd /opt
git clone https://github.com/Sahyagit/iles_project.git
cd iles_project
```

## Step 4 — Create .env file
```bash
nano .env
```

Paste and fill in your values:
```
SECRET_KEY=your-very-secret-key-change-this
DEBUG=False
ALLOWED_HOSTS=69.164.245.17,localhost
DB_NAME=iles_db
DB_USER=iles_user
DB_PASSWORD=strongpassword123
CORS_ALLOWED_ORIGINS=http://69.164.245.17:8080
EMAIL_HOST_USER=your@gmail.com
EMAIL_HOST_PASSWORD=your_app_password
FRONTEND_URL=http://69.164.245.17:8080
VITE_API_URL=http://69.164.245.17:8080/api
```

## Step 5 — Build and start
```bash
docker-compose up -d --build
```

## Step 6 — Create admin user
```bash
docker-compose exec backend python manage.py createsuperuser
```

## Step 7 — Check everything is running
```bash
docker-compose ps
docker-compose logs backend --tail 20
```

## Access the system
- Frontend: http://69.164.245.17:8080
- Django Admin: http://69.164.245.17:8080/admin
- API: http://69.164.245.17:8080/api

---

## Why port 8080?
The VPS already has:
- Port 80/443 — existing nginx
- Port 8001 — bet.kontolasports.com
- Port 8002 — xavisports + h2wrestuarantcafe
- Port 6071 — wamz.site
- Port 6072 — costfly.online

Port 8080 is free and safe to use.

---

## Useful Commands

```bash
# View logs
docker-compose logs -f

# View specific service logs
docker-compose logs backend --tail 50
docker-compose logs frontend --tail 50

# Restart services
docker-compose restart

# Stop everything
docker-compose down

# Update after git pull
git pull origin main
docker-compose up -d --build

# Run migrations manually
docker-compose exec backend python manage.py migrate

# Open Django shell
docker-compose exec backend python manage.py shell
```
