import express, { json } from "express";
import cors from "cors";
import { corsOptions } from "./configs/corsOptions.js";
import bus from "./routes/bus/bus.js";
import user from "./routes/user/user.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileDirName from "./util/file-dir-name.js";
import path from "path";
import root from "./routes/root.js";
import { logger, logEvents } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/erroHandler.js";
import cookieParser from "cookie-parser";
import { connectMDB } from "./configs/dbconnect.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3001;
mongoose.set("strictQuery", false);
const { __dirname } = fileDirName(import.meta);

// establish connection
connectMDB();

// middlewares
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", root);
app.use("/bus", bus);
app.use("/user", user);

// if the route does not exists
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("400 Not Found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("connected to MDB");
  app.listen(port, () => {
    console.log(`Running on port: ${port}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
