import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  aggregateUserOrders,
  getUsersAboveAge,
} from "../controller/user.controller";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/aggregate/orders", aggregateUserOrders);
router.get("/aggregate/users/above-age", getUsersAboveAge);

export default router;
