module.exports = (req, res, next) => {
    console.log("Passei no Middleware global");
    next();
}