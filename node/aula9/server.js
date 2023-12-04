const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send(`<form action='/' method='POST'>
            Nome do usuário: <input type='text' name='nome'>
            <button type="submit">Enviar</button>
            </form>`);
})

app.get("/testes", (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.send(`Você me mandou ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log("Acesse http://localhost:3000");
    console.log("Executando na porta 3000");
});