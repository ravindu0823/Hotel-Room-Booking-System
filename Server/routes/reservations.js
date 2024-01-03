import Reservation from "../models/reservation.js";
import User from "../models/user.js";
import { connectToDB } from "../db/conn.js";
import express from "express";
import dotenv from "dotenv";
import {
  validateReservationForExistingUsers,
  validateReservationForNewUsers,
  validateReservationId,
} from "../validations/reservationValidation.js";

dotenv.config();
const reservationRouter = express.Router();

reservationRouter.post(
  "/create-with-new-user",
  validateReservationForNewUsers,
  async (req, res) => {
    const { user, reservation } = await req.body;

    try {
      await connectToDB();

      const newUser = new User(user);

      newUser.password = newUser.generateHash(user.password);

      await newUser.save();

      const userId = newUser._id;

      const savedReservation = new Reservation({
        userId,
        ...reservation,
      });

      await savedReservation.save();

      console.log(savedReservation);
      if (!savedReservation)
        res.send("Reservation creation failed").status(404);

      return res.status(201).json(savedReservation);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
);

reservationRouter.post(
  "/create-existing-user",
  validateReservationForExistingUsers,
  async (req, res) => {
    const { reservation } = await req.body;

    try {
      await connectToDB();

      const savedReservation = new Reservation(reservation);

      await savedReservation.save();

      console.log(savedReservation);
      if (!savedReservation)
        res.send("Reservation creation failed").status(404);

      return res.status(201).json(savedReservation);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
);

reservationRouter.get("/", async (req, res) => {
  try {
    await connectToDB();

    const reservations = await Reservation.find().populate("userId");

    if (!reservations) {
      return res.status(404).json({ error: "No Reservations" });
    }

    console.log(reservations);
    return res.status(200).json(reservations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

reservationRouter.get("/count", async (req, res) => {
  try {
    await connectToDB();

    const reservations = await Reservation.countDocuments();
    const users = await User.countDocuments();

    /* if (!users) {
      return res.status(404).json({ error: "No Users" });
    }

    if (!reservations) {
      return res.status(404).json({ error: "No Reservations" });
    } */

    console.log(users);
    return res.status(200).json({ users, reservations });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

reservationRouter.delete(
  "/delete/:reservationId",
  validateReservationId,
  async (req, res) => {
    const { reservationId } = req.params;

    try {
      await connectToDB();

      const deletedReservation =
        await Reservation.findByIdAndDelete(reservationId);

      if (!deletedReservation) {
        return res.status(404).json({ error: "Delete Failed" });
      }

      console.log(deletedReservation);
      return res.status(200).json(deletedReservation);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
);

reservationRouter.put(
  "/update/:reservationId",
  validateReservationId,
  async (req, res) => {
    const { reservationId } = req.params;

    const {
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

      const updateReservation = await Reservation.findByIdAndUpdate(
        reservationId,
        {
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
        }
      );

      await updateReservation.save();

      const updatedReservation =
        await Reservation.findById(reservationId).populate("userId");

      if (!updatedReservation) {
        return res.status(404).json({ error: "Update Failed" });
      }

      console.log(updatedReservation);
      return res.status(200).json(updatedReservation);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
);

reservationRouter.get(
  "/:reservationId",
  validateReservationId,
  async (req, res) => {
    const { reservationId } = req.params;

    try {
      await connectToDB();

      const reservation =
        await Reservation.findById(reservationId).populate("userId");

      if (!reservation) {
        return res.status(404).json({ error: "Reservation not found" });
      }

      console.log(reservation);
      return res.status(200).json(reservation);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
);

export default reservationRouter;
