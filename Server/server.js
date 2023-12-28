import { connectToDB } from "./db/conn.js";
import express from "express";
import bodyParser from "body-parser";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

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

// Start the Express server
app.listen(PORT, async () => {
  try {
    await connectToDB();
    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});
