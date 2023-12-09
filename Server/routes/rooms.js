import Room from "../models/room.js";
import { connectToDB } from "../db/conn.js";
import express from "express";

const roomsRouter = express.Router();

roomsRouter.post("/new", async (req, res) => {
  const { roomType, facilities, persons, price } = await req.body;
  const availability = true;

  try {
    await connectToDB();

    const savedRoom = new Room({
      roomType,
      availability,
      facilities,
      persons,
      price,
    });

    await savedRoom.save();

    console.log(savedRoom);
    res.send(savedRoom).status(201);
  } catch (error) {
    console.log(error);
  }
});

export default roomsRouter;
