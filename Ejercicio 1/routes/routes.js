const express = require("express");
const routes = express.Router();

const { numberController } = require("../controllers");

routes.get("/fibonacci", numberController.getFibo);
// routes.post("/users", usersControllerusersController.createUser);
// routes.put("/users", usersController.updateUser);
// routes.delete("/users", usersController.deleteUser);

module.exports = routes;
