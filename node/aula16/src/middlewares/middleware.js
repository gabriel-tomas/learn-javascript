module.exports = (req, res, next) => {
    res.locals.umaVariavelLocal = "Isso pode aplicado para todas as rotas e páginas.";
    next();
}