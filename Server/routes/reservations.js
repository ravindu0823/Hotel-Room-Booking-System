import Reservation from "../models/reservation.js";
import { connectToDB } from "../db/conn.js";
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const reservationRouter = express.Router();

reservationRouter.post("/new", async (req, res) => {
  const {
    userId,
    arrivalDate,
    arrivalTime,
    departureDate,
    departureTime,
    roomType,
    noOfRooms,
    foodType,
    noOfAdults,
    noOfChildren,
    specialRequirements,
  } = await req.body;

  try {
    await connectToDB();

    const savedReservation = new Reservation({
      userId,
      arrivalDate,
      arrivalTime,
      departureDate,
      departureTime,
      roomType,
      noOfRooms,
      foodType,
      noOfAdults,
      noOfChildren,
      specialRequirements,
    });

    await savedReservation.save();

    console.log(savedReservation);
    if (!savedReservation) res.send("Reservation creation failed").status(404);

    return res.status(201).json({ savedReservation });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

reservationRouter.get("/", async (req, res) => {
  try {
    await connectToDB();

    const reservations = await Reservation.find({}).populate("userId");

    if (!reservations) {
      return res.status(404).json({ error: "No Reservations" });
    }

    console.log(reservations);
    return res.status(200).json({ reservations });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

reservationRouter.get("/:reservationId", async (req, res) => {
  const { reservationId } = req.params;

  try {
    await connectToDB();

    const reservation = await Reservation.findById(reservationId).populate(
      "userId"
    );

    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    console.log(reservation);
    return res.status(200).json({ reservation });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

export default reservationRouter;
