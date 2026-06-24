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

// Root path health check for Render deployment
app.get("/", (req, res) => {
  res.status(200).json({
    status: "healthy",
    message: "Server is running",
  });
});

app.use("/bfhl", bfhlRoutes);

export default app;