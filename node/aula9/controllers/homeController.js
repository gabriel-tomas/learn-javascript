exports.paginaInicial = (req, res) => {
    res.send(`<form action='/' method='POST'>
            Nome do usuário: <input type='text' name='nome'>
            <button type="submit">Enviar</button>
            </form>`);
};

exports.paginaInicialPost = (req, res) => {
    res.send(req.body);
};