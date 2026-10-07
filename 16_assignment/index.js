const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use("/api/users", require("./routes/users"));

app.use(express.json());

app.listen(3000);

app.get("/", (req, res) => {
  res.send("<p>Home page</p>");
});

app.use((req, res) => {
  res.status(404).render("404");
});
