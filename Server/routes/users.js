import User from "../models/user.js";
import { connectToDB } from "../db/conn.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { userName, age } = await req.body;

  try {
    await connectToDB();

    const savedUser = new User({
      userName,
      age,
    });

    await savedUser.save();
    console.log(savedUser);
    res.send(savedUser).status(201);
  } catch (error) {
    console.log(error);
  }
});
export default userRouter;
