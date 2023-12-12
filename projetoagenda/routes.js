const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

// Rota da home
route.get("/", homeController.index);

// Rota de login
route.get("/login", loginController.index);
route.post("/login/register", loginController.register);


module.exports = route;