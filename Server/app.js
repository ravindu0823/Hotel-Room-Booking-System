import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routes/users.js";
import roomsRouter from "./routes/rooms.js";
import foodsRouter from "./routes/foods.js";
import offersRouter from "./routes/offers.js";
import adminRouter from "./routes/admins.js";
import reservationRouter from "./routes/reservations.js";
import messageRouter from "./routes/messages.js";
import chatUserRouter from "./routes/chatUsers.js";

dotenv.config();

const app = express();
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5000",
    "http://localhost:8000",
    "http://159.223.74.216:5173",
    "http://159.223.74.216:5000",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware setup
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.use(express.json());

app.use("/users", userRouter);
app.use("/rooms", roomsRouter);
app.use("/foods", foodsRouter);
app.use("/offers", offersRouter);
app.use("/admins", adminRouter);
app.use("/reservations", reservationRouter);
app.use("/messages", messageRouter);
app.use("/chat", chatUserRouter);

export default app;
