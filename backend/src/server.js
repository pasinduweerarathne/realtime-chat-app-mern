import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import fs from "fs";
import path from "path";

const app = express();

const port = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

const publicDir = path.join(process.cwd(), "public");

app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

// if the public directory exists, serve the static files
// this is useful for serving the frontend build files in production
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  app.get("/{*any}", (req, res, next) => {
    res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
  });
}

app.listen(port, () => {
  connectDB();
  console.log("Server is running on PORT:", port);
});
