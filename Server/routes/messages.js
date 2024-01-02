import Message from "../models/message.js";
import { connectToDB } from "../db/conn.js";
import express from "express";

const messageRouter = express.Router();

messageRouter.post("/getmsg", async (req, res) => {
  try {
    await connectToDB();

    const { from, to } = req.body;

    const messages = await Message.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectedMessages);
  } catch (error) {
    console.log(error);
  }
});

messageRouter.post("/addmsg", async (req, res) => {
  try {
    await connectToDB();

    const { from, to, message } = req.body;

    const data = await Message.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (error) {
    console.log(error);
  }
});

export default messageRouter;
