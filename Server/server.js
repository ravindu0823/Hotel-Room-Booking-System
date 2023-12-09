import express from "express";
import cors from "cors";
import userRouter from "./routes/users.js";
import roomsRouter from "./routes/rooms.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/rooms", roomsRouter);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
