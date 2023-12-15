const mongoose = require("mongoose");
const validator = require("validator");

const ContatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ""},
    email: {type: String, required: false, default: ""},
    telefone: {type: String, required: false, default: ""},
    criadoEm: {type: Date, default: Date.now},
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.erros = [];
    this.contato = null;
}

Contato.prototype.register = async function() {
    this.valida();
    if(this.erros.length > 0) return;

    this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = function() {
    this.cleanUp();
    // Validação...
    if(this.body.email && !validator.isEmail(this.body.email)) this.erros.push("E-mail inválido");
    if(!this.body.nome) this.erros.push("Nome é um campo obrigatório");
    if(!this.body.email && !this.body.telefone) this.erros.push("Pelo menos um contato precisa ser adicionado: e-mail ou telefone");
}

Contato.prototype.cleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== "string") {
            this.body[key] = "";
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
    };
}

Contato.prototype.edit = async function(id) {
    if(typeof id !== "string") return;
    this.valida();
    if(this.erros.length > 0) return;
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {new: true});
}


Contato.buscaPorId = async function(id) {
    if(typeof id !== "string") return;
    return await ContatoModel.findById(id);
}

Contato.buscaContatos = async function() {
    return await ContatoModel.find().sort({criadoEm: -1});
}

Contato.delete = async function(id) {
    if(typeof id !== "string") return;
    return await ContatoModel.findOneAndDelete(id);
}

module.exports = Contato;