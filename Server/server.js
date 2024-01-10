import { connectToDB } from "./db/conn.js";
import app from "./app.js";
import { Server } from "socket.io";
import fs from "fs";
import https from "https";
import http from "http";
const HTTP_PORT = process.env.PORT || 4000;
const HTTPS_PORT = process.env.PORT || 8443;

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

// Start the Express server
/* const server = app.listen(PORT, async () => {
  try {
    await connectToDB();
    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}); */

const server = http.createServer(app);
const httpsServer = https.createServer(options, app);

server.listen(HTTP_PORT, async () => {
  try {
    await connectToDB();
    console.log(`Server is listening on port ${HTTP_PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});

httpsServer.listen(HTTPS_PORT, async () => {
  try {
    await connectToDB();
    console.log(`Https Server is listening on port ${HTTPS_PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});

const io = new Server(httpsServer, {
  cors: {
    origin: [
      "http://localhost:5000",
      "http://frontend-admin",
      "http://frontend-user",
      "http://frontend-chat",
      "http://frontend-user:5000",
      "http://frontend-admin:5173",
      "http://frontend-chat:8000",
      "https://cinnamonred.companiaa.online",
      "https://cinnamonred.companiaa.online:5000",
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
