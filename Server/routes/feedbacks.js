import Feedback from "../models/feedback.js";
import { connectToDB } from "../db/conn.js";
import express from "express";
import sendEmail from "../emails/emailController.js";

const feedbackRouter = express.Router();

feedbackRouter.post("/new", async (req, res) => {
  const { name, email, feedback } = req.body;

  if (!name || !email || !feedback) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await connectToDB();

    const savedFeedback = new Feedback({
      name,
      email,
      feedback,
    });

    await savedFeedback.save();
    console.log(savedFeedback);

    if (!savedFeedback) {
      return res.status(500).json({ error: "Server Error" });
    }

    const emailData = await sendEmail({ name, email });

    if (!emailData) {
      return res.status(500).json({ error: "Server Error" });
    }

    const emailResponse = emailData.response;

    res.status(201).json({ savedFeedback, emailResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

feedbackRouter.get("/", async (req, res) => {
  try {
    await connectToDB();
    const allFeedbacks = await Feedback.find();

    res.status(200).json(allFeedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

feedbackRouter.delete("/:id", async (req, res) => {
  try {
    await connectToDB();
    const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);

    if (!deletedFeedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    res.status(200).json(deletedFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default feedbackRouter;
