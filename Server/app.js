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
import staffRouter from "./routes/staff.js";
import paymentsRouter from "./routes/payments.js";
import feedbackRouter from "./routes/feedbacks.js";

dotenv.config();

const app = express();
const corsOptions = {
  origin: [
    "http://frontend-admin",
    "http://frontend-user",
    "http://frontend-chat",
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
app.use("/staff", staffRouter);
app.use("/payment", paymentsRouter);
app.use("/feedback", feedbackRouter);

export default app;
