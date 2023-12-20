import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let isConnected = false;

export const connectToDB = async () => {
  console.log(process.env.ATLAS_URI);
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.ATLAS_URI, {
      // dbName: "hotel-room-booking",
      dbName: "test-hotel-room-booking",
    });

    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export const disconnectFromDB = async () => {
  if (!isConnected) {
    return console.log("MongoDB is already disconnected");
  }

  try {
    await mongoose.disconnect();
    isConnected = false;
    console.log("MongoDB Disconnected");
  } catch (error) {
    console.log(error);
  }
}
