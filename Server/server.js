import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDB } from "./db/conn.js";
import userRouter from "./routes/users.js";
import roomsRouter from "./routes/rooms.js";
import foodsRouter from "./routes/foods.js";
import offersRouter from "./routes/offers.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/rooms", roomsRouter);
app.use("/foods",foodsRouter)
app.use("/offers",offersRouter)

// start the Express server
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server is listening on port ${PORT}`);
});
