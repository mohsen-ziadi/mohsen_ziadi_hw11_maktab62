const express = require("express");
const path = require("path");
const users = require("../json/users.json");
const router = express.Router();

router.post("/auth", (req, res) => {
  const foundUser = users.find((user) => {
    return (
      user.userName === req.body.userName && user.password == req.body.password
    );
  });

  if (foundUser === undefined) {
    res.send("User not found");
  } else {
    res.send(`
    <h1>Welcome</h1>
    <ul>
    <li>User name: ${foundUser.userName}</li>
    <li>password: ${foundUser.password}</li>
    </ul>
    `);
  }
});

module.exports = router;
