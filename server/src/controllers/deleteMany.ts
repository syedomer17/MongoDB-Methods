import "../dbConnect";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function deleteMany() {
  try {
    let check = await userModel.deleteMany({
      lastname: "Suhail",
    });
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

deleteMany();