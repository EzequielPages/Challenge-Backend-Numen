"use strict";

const express = require("express");
const api = express.Router();

const { userController } = require("../controllers");

api.get("/users/", userController.getUser);
api.post("/users", userController.createUser);
api.put("/users/:id", userController.updateUser);
api.delete("/users/:id", userController.deleteUser);
api.get("/users/:id", userController.getOneUser);

module.exports = api;
