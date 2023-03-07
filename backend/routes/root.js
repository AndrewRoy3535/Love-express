import path from "path";
import express from "express";
import fileDirName from "../util/file-dir-name.js";

const router = express.Router();

const { __dirname } = fileDirName(import.meta);

router.use("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

export default router;
