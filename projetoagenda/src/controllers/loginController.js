const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render("login");
};

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();
        if(login.erros.length > 0) {
            req.flash("errors", login.erros);
            req.session.save(() => {
                res.redirect("/login");
            });
        } else {
            req.flash("success", "Seu usuário foi criado com sucesso.");
            req.session.save(() => {
                res.redirect("/login");
            });
        }
    } catch(err) {
        console.log(err);
        res.render("404");
    }
    
};