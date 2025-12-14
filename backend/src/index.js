import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { createServer } from "http";


import { connectDB } from "./lib/db.js";

import {app,server} from "./lib/socket.js";

// routes
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";


dotenv.config();
app

const PORT = process.env.PORT;


// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "https://chat-app-ten-sigma-71.vercel.app",
  credentials: true
}));

app.options("*", cors());




// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);



// start server
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
  connectDB();
});
