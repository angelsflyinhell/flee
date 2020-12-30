const io = require("socket.io")(666);

io.on("connection", (socket) => {
  socket.emit("chat-message", "Hello World");
  socket.on("send-chat-message", (message) => {
    console.log(message);
  });
});
