import express from "express";
import { processData } from "../controllers/bfhlController.js";

const router = express.Router();

router.post("/", processData);

export default router;