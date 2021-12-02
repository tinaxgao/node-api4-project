const express = require("express");

const server = express();

server.use(express.json());

server.get("/api/users", (req, res) => {
  res.json([
    { id: 1, username: "Mario" },
    { id: 2, username: "Luigi" },
    { id: 3, username: "Yoshi" },
  ]);
});

server.post("/api/register", (req, res, next) => {
  User.insert({ username: req.username, password: req.password })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});

server.use((err, req, res, next) => {
  res
    .status(500)
    .json({
      message: "uh oh something went wrong :(",
      message: err.message,
      stack: err.stack,
    });
});

module.exports = server;
