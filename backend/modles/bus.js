import mongoose from "mongoose";

const { Schema } = mongoose;

const busSchema = new Schema({
  name: String,
});

export default mongoose.model(Bus, busSchema);
