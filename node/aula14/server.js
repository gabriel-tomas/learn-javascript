require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log("Conexão com DB obtida com sucesso!");
        app.emit("pronto");
    })
    .catch(error => {
        console.log("ERROR: erro na conexão com o DB");
        console.log(error);
    });

const routes = require("./routes");
const path = require("path");
const MdwareGlobal = require("./src/middlewares/middleware");

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Meus próprios middlewares
app.use(MdwareGlobal);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log("Acesse http://localhost:3000");
        console.log("Executando na porta 3000");
    });
})
