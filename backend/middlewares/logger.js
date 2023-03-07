import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import * as fs from "fs";
import { mkdir, appendFile } from "fs/promises";
import path from "path";
import fileDirName from "../util/file-dir-name.js";

const { __dirname } = fileDirName(import.meta);
export const logEvents = async (message, logFileName) => {
  const dataTime = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  const logItem = `${dataTime}\t${uuidv4()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await mkdir(path.join(__dirname, "..", "logs"));
    }
    await appendFile(path.join(__dirname, "..", "logs", logFileName), logItem);
  } catch (error) {
    console.error(error);
  }
};

export const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log");
  console.log(`${req.method} ${req.path}`);
  next();
};
