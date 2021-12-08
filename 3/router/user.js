const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All users");
});

router.get("/user", (req, res) => {
  res.send("user");
});

router.get("/user1", (req, res) => {
  res.send("user1");
});

router.get("/user2", (req, res) => {
  res.send("user2");
});

module.exports = router;
