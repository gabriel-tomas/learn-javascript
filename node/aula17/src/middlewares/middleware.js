exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = "Isso pode aplicado para todas as rotas e páginas.";
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === "EBADCSRFTOKEN") {
        return res.render("404");
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}