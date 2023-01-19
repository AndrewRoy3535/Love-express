import express from "express";
import { bus } from "../controllers/bus.js";

const router = express.Router();

router.get("/", bus);

export default router;
