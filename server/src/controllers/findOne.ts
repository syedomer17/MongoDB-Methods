import "../dbConnect"
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function findone() {
  try {
    let check = await userModel.findOne({ email: "laurataylor@example.com" });
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

findone();