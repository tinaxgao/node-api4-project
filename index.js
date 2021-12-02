require("dotenv").config();

const express = require("express");
const cors = require("cors");

const server = require("./api/server");

server.use(cors());

const path = require("path");
server.use(express.static(path.join(__dirname, "client/build")));
server.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
