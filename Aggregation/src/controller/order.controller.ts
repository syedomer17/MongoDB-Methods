import { Request, Response } from "express";
import { Order } from "../models/Order";
/**
 * CREATE ORDER
 */
export const createOrder = async (req: Request, res: Response) => {
  const {userId, amount, status, items} = req.body;
  const order = await Order.create({userId, amount, status, items});
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

//the best arraregation that I have ever done
export const result = async (req: Request, res: Response) => {
  try {
    const myresult = await Order.aggregate([
    {
      $match: { status: "completed" }
    },
    {
      $group: {
        _id: "$userId",
        totalSpent: {$sum: "$amount"},
        orders: {$sum: 1}
      }
    },{
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "user"
      }
    },
    {
      $unwind: "$user"
    },
    {
      $project: {
        _id: 0,
        userName: "$user.name",
        email: "$user.email",
        totalSpent: 1,
        orders: 1
      }
    }
  ]);
    res.json(myresult);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
} 