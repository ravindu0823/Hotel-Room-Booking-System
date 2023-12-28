import Room from "../models/room.js";
import { connectToDB } from "../db/conn.js";
import express from "express";

const roomsRouter = express.Router();

// add new room(start code)
roomsRouter.post("/new", async (req, res) => {
  const { roomType, facilities, persons, price, image } = await req.body;
  const availability = true;

  try {
    await connectToDB();



    const savedRoom = new Room({
      roomType,
      availability,
      facilities,
      persons,
      price,
      image,
    });

    await savedRoom.save();

    console.log(savedRoom);
    res.send(savedRoom).status(201);
  } catch (error) {
    console.log(error);
  }
});
// end code

//delete room(start code)
roomsRouter.delete("/:roomId", async (req, res) => {
  const roomId = req.params.roomId;

  try {
    await connectToDB();

    const deletedRoom = await Room.findByIdAndDelete(roomId);

    if (!deletedRoom) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.status(200).json(deletedRoom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
// end code

// View room(start code)
roomsRouter.get("/read", async (req, res) => {
  try {
    await connectToDB();

    const allRooms = await Room.find();
    res.status(200).json(allRooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
// end code

// update room(start code)
roomsRouter.put("/:roomId", async (req, res) => {
  const roomId = req.params.roomId;
  const { roomType, availability, facilities, persons, price } = req.body;

  try {
    await connectToDB();

    const updatedRoom = await Room.findByIdAndUpdate(
      roomId,
      {
        roomType,
        availability,
        facilities,
        persons,
        price,
      },
      { new: true }
    );

    if (!updatedRoom) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.status(200).json(updatedRoom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
// end code
roomsRouter.get("/:roomId", async (req, res) => {
  const { roomId } = req.params;

  try {
    await connectToDB();
    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.json(room);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
export default roomsRouter;
