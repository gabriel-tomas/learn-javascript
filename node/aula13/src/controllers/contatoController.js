exports.oiContato = (req, res) => {
    res.render("contact");
}

exports.contatoPost = (req, res) => {
    res.send(req.body);
}