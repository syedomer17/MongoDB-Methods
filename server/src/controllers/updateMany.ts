import "../dbConnect";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function updateMany() {
  try {
    let check = await userModel.updateMany(
      { lastname: "Doe" },
      { $set: { lastname: "Suhail" } }
    );
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

updateMany();