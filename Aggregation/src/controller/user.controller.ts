import { Request, Response } from "express";
import { User } from "../models/User";

/**
 * CREATE USER
 */
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, age, role } = req.body;
    const user = await User.create({ name, email, age, role });
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * GET ALL USERS
 */
export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

/**
 * GET USER BY ID
 */
export const getUserById = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

/**
 * UPDATE USER
 */
export const updateUser = async (req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
};

/**
 * DELETE USER
 */
export const deleteUser = async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
};

//$match — Filter FIRST stage to select documents where the role is "user"
//$group — Group the filtered documents by the role field and calculate the total count of users with that role
/**
 * AGGREGATE USER ORDERS
 */
export const aggregateUserOrders = async (req: Request, res: Response) => {
  try {
    const user = await User.aggregate([
      { $match: { role: "user" } },
      { $group: { _id: "$role", total: { $sum: 1 } } },
    ]);

    res.json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//Get all users above age 25
export const getUsersAboveAge = async (req: Request, res: Response) => {
  try{
    const users = await User.aggregate([
      { $match: { age: {$gt: 19} } }
    ])
    res.json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
