const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    /*console.log(req.session.user);*/
    if(req.session.user) return res.render("login-logado");
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

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();
        if(login.erros.length > 0) {
            req.flash("errors", login.erros);
            req.session.save(() => {
                res.redirect("/login");
            });
        } else {
            req.flash("success", "Logado com sucesso!");
            req.session.user = login.user;
            req.session.save(() => {
                res.redirect("/login");
            });
        }
    } catch(err) {
        console.log(err);
        res.render("404");
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect("/");
}