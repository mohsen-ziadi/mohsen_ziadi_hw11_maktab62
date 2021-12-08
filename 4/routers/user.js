const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const users = require(path.join(__dirname, "../json/users.json"));

router.get("/getAllUsers", (req, res) => {
  res.send(users);
});

router.post("/getUser", (req, res) => {
  const foundUser = users.find((user) => user.userName === req.body.userName);
  
  if (foundUser === undefined) {
    res.send("Not found");
  } else {
    res.send(foundUser);
  }
});

module.exports = router;
