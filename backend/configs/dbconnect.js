import mongoose from "mongoose";

export const connectMDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
  } catch (error) {
    console.error(error);
  }
};
