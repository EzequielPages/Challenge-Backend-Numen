const express = require("express");
const app = express();

app.get("/users/:id", function (req, res, next) {
  let usuarios = req.params.id;
  next();
});

app.get("/users/:id", function (req, res, next) {
  res.end(req.params.id);
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

app.listen(3001);
