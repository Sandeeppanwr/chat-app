import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";


import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import messageRoutes from "./routes/message.route.js"
import {app,server} from "./lib/socket.js";
dotenv.config()

<<<<<<< Updated upstream
<<<<<<< Updated upstream
const PORT=process.env.PORT||5001
=======
const PORT=process.env.PORT;

const __dirname=path.resolve();
>>>>>>> Stashed changes
=======
const PORT=process.env.PORT;

const __dirname=path.resolve();
>>>>>>> Stashed changes

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }


server.listen(PORT,()=>{
    console.log("server is running on a port"+ PORT);
    connectDB();
});
