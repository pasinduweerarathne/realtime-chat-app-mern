import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();

const port = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(port, () => {
  connectDB();
  console.log("Server is running on PORT:", port);
});
