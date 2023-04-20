const express = require("express");
const authRouter = require("./auth/authRoutes");
const clientRouter = require("./client/clientRoute");
const md = require("./auth/authMiddleware");

const server = express();
server.use(express.json());

server.use("/auth", authRouter);
server.use("/clients", md.restricted, clientRouter);

server.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
});

module.exports = server;
