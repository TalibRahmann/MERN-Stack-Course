const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.send("<p>Home page</p>");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello!" });
});
