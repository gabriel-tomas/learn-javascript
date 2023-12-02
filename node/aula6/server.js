const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`<form action='/' method='POST'>
            Nome: <input type='text' name='nome'>
            <button type="submit">Enviar</button>
            </form>`);
})

app.post("/", (req, res) => {
    res.send("Form enviado");
})

app.get("/about", (req, res) => {
    res.send("Você está no /about");
})

app.listen(3000, () => {
    console.log("Executando na porta 3000");
});