const express = require("express");
const app = express();

app.use("/users/:id", (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});

app.get("/users/:id", (req, res) => {
  res.send({ users });
});

app.post("/", (req, res) => {
  res.send();
});

app.put("/users", (req, res) => {
  res.send();
});

app.delete("/users", (req, res) => {
  res.send();
});
