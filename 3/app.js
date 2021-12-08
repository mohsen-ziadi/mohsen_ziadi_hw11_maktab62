const express = require("express");
const app = express();
const router = require("./router/user");

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
