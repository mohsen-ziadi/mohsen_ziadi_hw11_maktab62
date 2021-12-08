const express = require("express");
const app = express();
const pages = require("./routers/pages");

app.use("/", pages);
app.listen(3000);
console.log("Listening at port 3000");
