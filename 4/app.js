const express = require("express");
const app = express();
const admin = require("./routers/admin");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", admin);

app.listen(3000, () => {
  console.log("Sever is running at port 3000");
});
