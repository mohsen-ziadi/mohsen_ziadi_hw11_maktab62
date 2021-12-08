const express = require("express");
const path = require("path");
const app = express();
const authHandler = require("./routers/auth");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(authHandler);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

// app.get("/auth", );

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});