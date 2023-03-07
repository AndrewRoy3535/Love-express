import express from "express";
import { bus, createbusSchedule } from "../../controllers/bus.js";

const router = express.Router();

router.get("/", bus);
router.post("/", createbusSchedule);

export default router;
