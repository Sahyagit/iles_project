# ILES Deployment Guide
## VPS: 69.164.245.17

---

## Step 1 — SSH into your VPS
```bash
ssh root@69.164.245.17
```

## Step 2 — Install Docker and Docker Compose
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

## Step 4 — Create production .env file
```bash
cp .env.production .env
nano .env
```
Fill in your real values:
- SECRET_KEY — generate one at https://djecrety.ir
- DB_PASSWORD — choose a strong password
- EMAIL_HOST_USER — your Gmail
- EMAIL_HOST_PASSWORD — your Gmail app password

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
- Frontend: http://69.164.245.17
- Django Admin: http://69.164.245.17/admin
- API: http://69.164.245.17/api

---

## Useful Commands

```bash
# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Stop everything
docker-compose down

# Update after git pull
git pull origin main
docker-compose up -d --build

# Run migrations manually
docker-compose exec backend python manage.py migrate
```
