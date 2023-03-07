import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  title: String,
});

export default mongoose.model("Schedule", scheduleSchema);
