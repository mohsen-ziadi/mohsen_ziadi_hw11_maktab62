const express = require("express");
const router = express.Router();
const user = require("./user");

router.use("/admin", user);

module.exports = router;
