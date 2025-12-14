💬 Realtime Chat Application

A full-stack realtime chat application with authentication, private messaging, and Socket.IO-powered live updates.

🚀 Features

🔐 User Authentication (Signup / Login / Logout)

🍪 JWT Authentication using HTTP-only cookies

💬 Realtime messaging with Socket.IO

🟢 Online / Offline user status

🧾 Protected API routes

📦 MongoDB database

🌐 Deployed on Vercel + Render

🎨 Modern responsive UI

🛠️ Tech Stack
Frontend

React (Vite)

Zustand (state management)

Axios

Tailwind CSS

Socket.IO Client

Backend

Node.js

Express.js

MongoDB + Mongoose

Socket.IO

JWT

Cookie-Parser

CORS

📂 Project Structure
chat-app/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── lib/
│   │   │   └── axios.js
│   │   └── App.jsx
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── lib/
│   │   │   ├── db.js
│   │   │   └── socket.js
│   │   ├── models/
│   │   └── index.js
│   └── package.json
│
└── README.md

🔐 Authentication Flow

User logs in / signs up

Backend generates a JWT

JWT is stored in HTTP-only cookie

Protected routes use middleware to verify JWT

Socket connection uses authenticated user ID

🔒 Protected Routes Middleware
const token = req.cookies.jwt;
if (!token) return res.status(401).json({ message: "Unauthorized" });

🌐 Environment Variables
Backend (backend/.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Frontend (frontend/.env)
VITE_BACKEND_URL=https://your-render-backend-url.onrender.com

▶️ Running Locally
1️⃣ Backend
cd backend
npm install
npm run dev

2️⃣ Frontend
cd frontend
npm install
npm run dev

🚀 Deployment
Frontend (Vercel)

Build command: npm run build

Output directory: dist

Environment variable:

VITE_BACKEND_URL=https://your-render-backend-url.onrender.com

Backend (Render)

Root directory: backend

Build command: npm install

Start command:

node src/index.js

⚠️ Common Issues & Fixes
❌ Login works but shows “Unauthorized”

✅ Fix:

Ensure cookie name matches (jwt)

withCredentials: true in Axios

Correct CORS origin

❌ Socket reconnects infinitely

✅ Fix:

Do NOT use localhost in production

Use deployed backend URL

Disable ad-blocker (can block polling)

📸 Screenshots

Add screenshots here (login, chat screen, online users, etc.)

✨ Future Improvements

Group chats

Typing indicators

Message read receipts

File & image sharing

Push notifications

👨‍💻 Author

Devanshu Shukla

If you like this project, ⭐ the repository!

If you want, I can also:

Add badges (Vercel, Render, MongoDB)

Write a short project description for resume

Create a deployment checklist

Generate a portfolio-ready README

Just tell me 👍

ChatGPT can make mistakes. Check important info. See Cookie Preferenc
