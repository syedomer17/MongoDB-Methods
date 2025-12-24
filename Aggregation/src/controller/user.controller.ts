import { Request, Response } from "express";
import { User } from "../models/User";

/**
 * CREATE USER
 */
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
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
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
};

/**
 * DELETE USER
 */
export const deleteUser = async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
};
