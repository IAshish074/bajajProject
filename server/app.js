import express from "express";
import cors from "cors";
import bfhlRoutes from "./routes/bfhlRoutes.js";

const app = express();

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/bfhl", bfhlRoutes);

export default app;