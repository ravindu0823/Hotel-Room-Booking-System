import { connectToDB } from "./db/conn.js";
const PORT = process.env.PORT || 3000;
import app from "./app.js";

// start the Express server
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server is listening on port ${PORT}`);
});
