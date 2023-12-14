const Contato = require("../models/ContatoModel");

exports.index = (req, res) => {
    res.render("contato", {
        contato: {}
    });
}

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();
        
        if(contato.erros.length > 0) {
            req.flash("errors", contato.erros);
            req.session.save(() => res.redirect("/contato"));
        } else {
            req.flash("success", "Contato criado com sucesso!");
            req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        }
    } catch(err) {
        console.log(err);
        res.render("404");
    }
}

exports.editIndex = async (req, res) => {
    if(!req.params.id) return res.render("404");
    if(req.params.id.length !== 24) return res.render("404");
    
    let contato;
    try {
        contato = await Contato.buscaPorId(req.params.id);
        console.log(contato);
    } catch(err) {
        console.log(err);
        contato = null;
    }

    if(!contato) return res.render("404");
    
    res.render("contato", {
        contato
    });
}