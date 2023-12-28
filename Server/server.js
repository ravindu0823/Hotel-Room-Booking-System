import { connectToDB } from "./db/conn.js";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

// Start the Express server
app.listen(PORT, async () => {
  try {
    await connectToDB();
    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});
