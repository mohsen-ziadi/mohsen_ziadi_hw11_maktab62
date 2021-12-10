const express = require("express");
const app = express();
const router = require("./router/user");
const port = 5000

app.use("/", router);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});