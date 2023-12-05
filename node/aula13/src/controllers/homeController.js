exports.paginaInicial = (req, res, next) => {
    res.render(`index`);
    console.log(`'paginaInicial' req.session.nome = ${req.session.nome}`);
    next();
};

exports.paginaInicialPost = (req, res, next) => {
    res.send(req.body);
};