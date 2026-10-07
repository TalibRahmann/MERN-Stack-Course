const express = require("express");

const router = express.Router();

//get a list of users
router.get("/", (req, res) => {
  res.send({ type: "GET" });
});

//update user in db
router.post("/", (req, res) => {
  res.send({ type: "POST" });
});

//get a user from the list of users
router.get("/:id", (req, res) => {
  res.send({ type: "GET" });
});

module.exports = router;
