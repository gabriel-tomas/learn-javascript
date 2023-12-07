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

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");
const MdwareGlobal = require("./src/middlewares/middleware");

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
    secret: "opdkafposd+00kfpoksdopfkpos+-23a23 asd arere",
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

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
