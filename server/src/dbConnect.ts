import mongoose from "mongoose";
import config from "config";

const connect = async () => {
  try {
    await mongoose.connect(config.get<string>("DB_URI"));
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connect();
