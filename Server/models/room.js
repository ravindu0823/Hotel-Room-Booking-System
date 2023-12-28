// RoomId, Room Type (lux/normal), Availability(Bool), Facilities(), Persons for each room, Price

import pkg from "mongoose";
const { Schema, model, models } = pkg;

const RoomSchema = new Schema({
  roomType: {
    type: String,
    required: [true, "Please add a RoomType"],
  },

  availability: {
    type: Boolean,
    required: [true, "Please add an availability"],
  },

  facilities: {
    type: String,
    required: [true, "Please add a facility"],
  },

  persons: {
    type: Number,
    required: [true, "Please add the number of persons"],
  },

  price: {
    type: Number,
    required: [true, "Please add the price"],
  },
  image: {
    type: String,
    required: [true, "Please add image"],
  },
});

const Room = models.Room || model("Room", RoomSchema);

export default Room;
