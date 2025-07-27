import express from "express";
import {
  placeOrder,
  placeOrderRazorpay,
  allOrders,
  updateStatus,
  userOrders,
  verifyRazorpay,
} from "../controllers/order.controller.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();
//admin
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//payments
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//users
orderRouter.post("/userorders", authUser, userOrders);

//verify
orderRouter.post("verifyRazorpay", authUser, verifyRazorpay);

export default orderRouter;
