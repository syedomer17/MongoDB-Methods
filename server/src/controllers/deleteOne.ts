import "../dbConnect";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function deleteOne() {
  try {
    let check = await userModel.deleteOne({
      firstname: "Ali",
    });
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

deleteOne();