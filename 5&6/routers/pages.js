const express = require("express");
const path = require("path");
const router = express.Router();

const pages = {
  1: path.join(__dirname, "../html/1.html"),
  2: path.join(__dirname, "../html/2.html"),
  3: path.join(__dirname, "../html/3.html"),
  4: path.join(__dirname, "../html/4.html"),
  5: path.join(__dirname, "../html/5.html"),
};

router.get("/html:id", (req, res) => {
  res.sendFile(pages[`${req.params.id}`]);
});

module.exports = router;
