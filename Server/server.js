import express from "express";
import cors from "cors";
import { connectToDB } from "./db/conn.js";
import userRouter from "./routes/users.js";
import roomsRouter from "./routes/rooms.js";
import offerRouter from "./routes/offers.js"
import dotenv from "dotenv";
import foodsRouter from "./routes/foods.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/rooms", roomsRouter);
app.use("/foods",foodsRouter)

// start the Express server
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server listening on port ${PORT}`);
});
