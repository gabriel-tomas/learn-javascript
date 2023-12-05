const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

function meuMiddleware(req, res, next) {
    req.session = {nome: "Gabriel"};
    console.log();
    console.log("Passei no seu Middleware");
    next();
}

// Rota da home
route.get("/", meuMiddleware, homeController.paginaInicial, (req, res, next) => {
    console.log("Estou aqui ainda")
    console.log(`'ultimo Middleware' req.session.nome = ${req.session.nome}`);
});
route.post("/", homeController.paginaInicialPost);

// Rota de contato
route.get("/contato", contatoController.oiContato);
route.post("/contato", contatoController.contatoPost);

module.exports = route;