import Admin from "../models/admin.js";
import { connectToDB } from "../db/conn.js";
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  validateAdminAdd,
  validateAdminLogin,
} from "../validations/adminValidation.js";

dotenv.config();
const adminRouter = express.Router();

adminRouter.post("/add", validateAdminAdd, async (req, res) => {
  const { fullName, userName, password } = await req.body;

  try {
    await connectToDB();

    const savedAdmin = new Admin({
      fullName,
      userName,
      password,
    });

    savedAdmin.password = savedAdmin.generateHash(password);

    await savedAdmin.save();

    console.log(savedAdmin);
    if (!savedAdmin) res.send("Not found").status(404);

    const token = jwt.sign(
      { adminId: savedAdmin._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "10m",
      }
    );

    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

adminRouter.post("/login", validateAdminLogin, async (req, res) => {
  const { userName, password } = await req.body;

  try {
    await connectToDB();

    const loggedAdmin = await Admin.findOne({ userName });

    if (!loggedAdmin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    console.log(loggedAdmin);

    if (!loggedAdmin.validPassword(password, loggedAdmin.password)) {
      //password did not match
      return res.status(401).json({ error: "Incorrect password" });
    } else {
      // password matched. proceed forward
      console.log("password matched");
      const token = jwt.sign(
        { adminId: loggedAdmin._id, adminName: loggedAdmin.fullName },
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

adminRouter.get("/protected", async (req, res) => {
  try {
    const authHeader = await req.headers.authorization;
    // console.log(authHeader);
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // console.log(decoded.userId);

    if (!decoded) {
      return res.status(400).json({ message: "Expired" });
    } else if (decoded.exp < Date.now() / 1000) {
      return res.status(400).json({ message: "Expired" });
    } else {
      // If the token is valid, return some protected data
      return res.status(200).json({ data: "Protected data" });
    }
  } catch (error) {
    console.log("Token Verification Error: ", error);
    return res.status(400).json({ message: "Unauthorized" });
  }
});

export default adminRouter;
