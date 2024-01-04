import { connectToDB } from "./db/conn.js";
import app from "./app.js";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000;

// Start the Express server
const server = app.listen(PORT, async () => {
  try {
    await connectToDB();
    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:5000",
      "http://localhost:8000",
      "http://159.223.74.216:5173",
      "http://159.223.74.216:5000",
      "http://159.223.74.216:8000",
    ],
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log("New user connected");
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
