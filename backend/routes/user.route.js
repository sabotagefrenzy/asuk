import express from "express";
import {
  loginUser,
  adminLogin,
  registerUser,
  getProfile,
  updateProfile,
} from "../controllers/user.controller.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.post("/profile", authUser, getProfile);
userRouter.post("/profile/update", authUser, updateProfile);

export default userRouter;
