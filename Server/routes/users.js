import User from "../models/user.js";
import { connectToDB } from "../db/conn.js";
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  validateUserAdd,
  validateUserLogin,
} from "../validations/userValidation.js";

dotenv.config();
const userRouter = express.Router();

userRouter.post("/register", validateUserAdd, async (req, res) => {
  const { fullName, userName, password, contactNumber, address, nic } =
    await req.body;

  try {
    await connectToDB();

    const savedUser = new User({
      fullName,
      userName,
      contactNumber,
      address,
      nic,
    });

    savedUser.password = savedUser.generateHash(password);

    await savedUser.save();

    console.log(savedUser);
    if (!savedUser) res.send("Not found").status(404);

    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

userRouter.post("/login", validateUserLogin, async (req, res) => {
  const { userName, password } = await req.body;

  try {
    await connectToDB();

    const loggedUser = await User.findOne({ userName });

    if (!loggedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!loggedUser.validPassword(password, loggedUser.password)) {
      //password did not match
      return res.status(401).json({ error: "Incorrect password" });
    } else {
      // password matched. proceed forward
      console.log("password matched");
      const token = jwt.sign(
        { userId: loggedUser._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "10m",
        }
      );
      return res.status(200).json({ token });
    }
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/", async (req, res) => {
  try {
    await connectToDB();

    const users = await User.find();

    if (users.length == 0) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/protected", async (req, res) => {
  try {
    const authHeader = await req.headers.authorization;
    // console.log(authHeader);
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // console.log(decoded.userId);

    if (!decoded) {
      return res.status(400).json({ message: "Expired. Unauthorized" });
    } else if (decoded.exp < Date.now() / 1000) {
      return res.status(400).json({ message: "Expired. Unauthorized" });
    } else {
      // If the token is valid, return some protected data
      return res.status(200).json({ data: "Protected data" });
    }
  } catch (error) {
    console.log("Token Verification Error: ", error);
    return res.status(400).json({ message: "Unauthorized" });
  }
});

userRouter.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  console.log(userId);

  try {
    await connectToDB();

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "No Users" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
});

export default userRouter;
