module.exports = (req, res, next) => {
    console.log("");
    console.log("Passei no Middleware global");

    if(req.body.nome) {
        console.log(`Você postou ${req.body.nome}`);
    }

    next();
}