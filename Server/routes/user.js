import express from "express";
import db from "../db/conn.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ObjectId } from "mongodb";

dotenv.config();
const router = express.Router();

async function authenticateUser(email, password) {
  let collection = await db.collection("User");
  let query = { email, password };
  let user = await collection.findOne(query);
  console.log(user);

  if (user) return user;
  else return null;
}

router.post("/login", async (req, res) => {
  const { email, password } = await req.body;

  const user = await authenticateUser(email, password);
  if (!user) return res.status(401).json({ error: "User not found" });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });

  return res.json({ token });
});

router.post("/register", async (req, res) => {
  const { email, password, username } = await req.body;
  let newDocument = {
    username,
    email,
    password,
  };
  let collection = await db.collection("User");
  let user = await collection.insertOne(newDocument);
  console.log(user);

  if (!user) res.send("Not found").status(404);
  const token = jwt.sign({ userId: user.insertedId }, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });
  // else res.send(user).status(201);
  return res.json({ token });
});

router.post("/feedback", async (req, res) => {
  const { feedback } = await req.body;

  try {
    const authHeader = await req.headers.authorization;
    // console.log(authHeader);
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // console.log(decoded.userId);

    let newFeedback = {
      userId: new ObjectId(decoded.userId),
      feedback,
    };
    let collection = await db.collection("Feedback");
    let insertedFeedback = await collection.insertOne(newFeedback);

    if (!insertedFeedback) res.send("Not found").status(404);
    else res.send(insertedFeedback).status(201);
  } catch (error) {
    console.log("Token Verification Error: ", error);
    return res.status(400).json({ message: "Unauthorized" });
  }
});

router.get("/protected", async (req, res) => {
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

export default router;
