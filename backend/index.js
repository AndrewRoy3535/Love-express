import express from "express";
import cors from "cors";
import bus from "./routes/bus.js";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("responding to request");
});

// middlewares
app.use(cors());

// routes
app.use("/bus", bus);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
