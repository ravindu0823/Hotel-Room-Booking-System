import Payment from "../models/payment.js";
import { connectToDB } from "../db/conn.js";
import express from "express";
import dotenv from "dotenv";
import { validatePaymentCreate } from "../validations/validatePayment.js";

dotenv.config();
const paymentsRouter = express.Router();

paymentsRouter.post("/create", validatePaymentCreate, async (req, res) => {
  const { payment } = await req.body;

  try {
    await connectToDB();

    const savedPayment = new Payment(payment);

    await savedPayment.save();

    console.log(savedPayment);
    if (!savedPayment) res.send("Payment creation failed").status(404);

    return res.status(201).json(savedPayment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

paymentsRouter.get("/", async (req, res) => {
  try {
    await connectToDB();

    const payments = await Payment.find()
      .populate("reservationId")
      .populate({
        path: "reservationId",
        populate: {
          path: "roomId",
          model: "Room",
        },
      })
      .populate("userId");

    console.log(payments);
    if (!payments) res.send("Payments not found").status(404);

    return res.status(201).json(payments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

paymentsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await connectToDB();

    const payments = await Payment.findById(id)
      .populate("reservationId")
      .populate({
        path: "reservationId",
        populate: {
          path: "roomId",
          model: "Room",
        },
      })
      .populate("userId");

    console.log(payments);
    if (!payments) res.send("Payments not found").status(404);

    return res.status(201).json(payments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

paymentsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await connectToDB();

    const deletedPayment = await Payment.findByIdAndDelete(id);

    console.log(deletedPayment);
    if (!deletedPayment) res.send("Payment deletion failed").status(404);

    return res.status(201).json(deletedPayment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

export default paymentsRouter;
