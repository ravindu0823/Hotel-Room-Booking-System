import pkg from "mongoose";
const { Schema, model, models, Types } = pkg;
import bcrypt from "bcrypt";

//(Full Name, username, password, Contact Number, Address, NIC)

const ReservationSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: "User",
    required: [true, "Please enter user"],
  },

  arrivalDate: {
    type: Date,
    required: [true, "Please enter arrivalDate"],
  },

  arrivalTime: {
    type: String,
    required: [true, "Please enter arrivalTime"],
  },

  departureDate: {
    type: Date,
    required: [true, "Please enter departureDate"],
  },

  departureTime: {
    type: String,
    required: [true, "Please enter departureTime"],
  },

  roomId: {
    type: Types.ObjectId,
    ref: "Room",
    required: [true, "Please enter roomId"],
  },

  noOfRooms: {
    type: Number,
    required: [true, "Please enter noOfRooms"],
  },

  foodType: {
    type: String,
    required: [true, "Please enter foodType"],
  },

  noOfAdults: {
    type: Number,
    required: [true, "Please enter noOfAdults"],
  },

  noOfChildren: {
    type: Number,
    required: [true, "Please enter noOfChildren"],
  },

  specialRequirements: {
    type: String,
    default: "None",
  },
});

const Reservation =
  models.Reservation || model("Reservation", ReservationSchema);

export default Reservation;
