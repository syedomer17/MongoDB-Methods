import "./dbConnect.js";
import userModel from "./models/index.js";
import mongoose from "mongoose";
async function verify() {
  try {
    let check = await userModel.find({});
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

verify();