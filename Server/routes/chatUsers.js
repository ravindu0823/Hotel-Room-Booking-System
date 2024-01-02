import ChatUser from "../models/chatUser.js";
import { connectToDB } from "../db/conn.js";
import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();
const chatUserRouter = express.Router();

chatUserRouter.post("/login", async (req, res) => {
  try {
    await connectToDB();

    const { username, password } = req.body;
    const user = await ChatUser.findOne({ username });

    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });

    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    console.log(error);
  }
});

chatUserRouter.post("/register", async (req, res) => {
  try {
    await connectToDB();

    const { username, email, password } = req.body;

    const usernameCheck = await ChatUser.findOne({ username });

    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });

    const emailCheck = await ChatUser.findOne({ email });

    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await ChatUser.create({
      email,
      username,
      password: hashedPassword,
    });

    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    console.log(error);
  }
});

// Get all users without the current user
chatUserRouter.get("/all-users/:id", async (req, res) => {
  try {
    await connectToDB();

    const users = await ChatUser.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (error) {
    console.log(error);
  }
});

// Set avatar image to the user
chatUserRouter.post("/set-avatar/:id", async (req, res) => {
  try {
    await connectToDB();

    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userData = await ChatUser.findByIdAndUpdate(
      userId,
      {
        isAvatarImageSet: true,
        avatarImage,
      },
      { new: true }
    );
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (error) {
    console.log(error);
  }
});

// Logout from chat
chatUserRouter.get("/logout/:id", async (req, res) => {
  try {
    await connectToDB();

    if (!req.params.id) return res.json({ msg: "User id is required " });
    onlineUsers.delete(req.params.id);
    return res.status(200).send();
  } catch (ex) {
    next(ex);
  }
});

export default chatUserRouter;
