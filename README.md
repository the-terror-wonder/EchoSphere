
# 🗨️ EchoSphere - Real-Time Messaging App

**EchoSphere** is a full-stack messaging app built with **React**, **Node.js**, **Express**, **Socket.IO**, and **MongoDB**. It offers real-time chat, file uploads, and a modern UI with Dockerized development setup.

---

## 🚀 Features

- 🔐 JWT-based user authentication
- 💬 Real-time messaging using Socket.IO
- 📁 Profile and file uploads (Multer)
- 🌙 Dark/light mode support (next-themes)
- 🎨 Clean and accessible UI (Radix UI, TailwindCSS)
- 🐳 Dockerized setup for easy development

---

## 🛠️ Tech Stack

| Layer     | Tech Stack                                            |
|-----------|--------------------------------------------------------|
| Frontend  | React, Vite, Zustand, TailwindCSS, Socket.IO Client   |
| Backend   | Node.js, Express, MongoDB, Socket.IO, Multer          |
| Realtime  | WebSockets (Socket.IO)                                |
| Styling   | TailwindCSS, clsx, Radix UI, Lucide Icons             |
| State     | Zustand, Zustand Persist                              |
| Build     | Docker & Docker Compose                               |

---

## 📁 Project Structure

```
EchoSphere/
├── backend/
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── uploads/
│   ├── .env
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── .env
│   └── Dockerfile
└── docker-compose.yml
```

---

## 📦 Frontend Dependencies

- `react`, `vite`, `axios`, `zustand`
- `socket.io-client`, `moment`, `emoji-picker-react`, `gsap`
- `tailwindcss`, `clsx`, `tailwind-merge`, `radix-ui`, `lucide-react`

## 📦 Backend Dependencies

- `express`, `mongoose`, `cors`, `dotenv`
- `jsonwebtoken`, `bcrypt`, `cookie-parser`
- `multer`, `socket.io`

---

## 🧰 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/cloud/atlas) (local or cloud)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/EchoSphere.git
cd EchoSphere
```

### 2. Create Environment Files

#### backend/.env
```
PORT=5000
JWT_SECRET=your_jwt_secret
MONGODB_URL=mongodb://localhost:27017/echosphere
ALLOWED_ORIGINS=http://localhost:3000
```

#### frontend/.env
```
VITE_SERVER_URL=http://localhost:5000
```

### 3. Dockerfiles

#### backend/Dockerfile
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
```

#### frontend/Dockerfile
```dockerfile
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 4. Docker Compose File

Create `docker-compose.yml` in root:
```yaml
version: "3.9"

services:
  backend:
    build:
      context: ./backend
    ports:
      - "5000:5000"
    env_file:
      - ./backend/.env

  frontend:
    build:
      context: ./frontend
    ports:
      - "3000:80"
    depends_on:
      - backend
```

### 5. Start the App

```bash
docker-compose up --build
```

Visit:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## 🧊 License

MIT — Free to use and modify.

## ✍️ Author :
Amit kumar panchayan
