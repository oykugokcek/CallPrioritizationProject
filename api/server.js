const express = require("express");
const authRouter = require("./routes/authRoutes");
const clientRouter = require("./routes/clientRoute");
const md = require("./middleware/authMiddleware");

const server = express();
server.use(express.json());

server.use("/auth", authRouter);
server.use("/clients", md.restricted, clientRouter);

server.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
});

module.exports = server;
