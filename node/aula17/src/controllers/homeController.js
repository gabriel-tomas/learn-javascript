exports.paginaInicial = (req, res) => {
    res.render(`index`, {
        titulo: `Esse é o valor da página Home`,
        subtitle: "Esse é o subtitulo com alguma coisa da página home....",
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
};

exports.paginaInicialPost = (req, res) => {
    res.send(req.body);
};