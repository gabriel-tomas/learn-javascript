exports.paginaInicial = (req, res) => {
    console.log(req.flash("info"), req.flash("error"), req.flash("success"));
    res.render(`index`);
};

exports.paginaInicialPost = (req, res) => {
    res.send(req.body);
};