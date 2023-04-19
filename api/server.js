const express = require("express");
const authRouter = require("./auth/authRoutes");

const server = express();
server.use(express.json());

server.use("/auth", authRouter);

module.exports = server;
