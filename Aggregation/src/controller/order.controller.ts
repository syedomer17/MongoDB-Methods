import { Request, Response } from "express";
import { Order } from "../models/Order";
/**
 * CREATE ORDER
 */
export const createOrder = async (req: Request, res: Response) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
};

/**
 * GET ALL ORDERS (with USER JOIN)
 */
export const getOrders = async (_req: Request, res: Response) => {
  const orders = await Order.find().populate("userId");
  res.json(orders);
};

/**
 * GET ORDER BY ID
 */
export const getOrderById = async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.id).populate("userId");
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
};

/**
 * UPDATE ORDER
 */
export const updateOrder = async (req: Request, res: Response) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(order);
};

/**
 * DELETE ORDER
 */
export const deleteOrder = async (req: Request, res: Response) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted successfully" });
};
