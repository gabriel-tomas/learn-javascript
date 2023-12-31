const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.erros = [];
        this.user = null;
        /* console.log(mongoose.models.Login);
        console.log(LoginModel); 
        console.log(mongoose.modelNames());*/
    }

    async register() {
        this.valida();
        await this.userExists();
        if(this.erros.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await LoginModel.create(this.body);
    }

    async login() {
        this.valida();
        if(this.erros.length > 0) return;
        this.user = await LoginModel.findOne({email: this.body.email});
        
        if(!this.user) {
            return this.erros.push("Usuário ou senha incorreto ou inválido");
        }
        if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.erros.push("Senha incorreta ou inválida");
            this.user = null;
        }
    }

    async userExists() {
        this.user = await LoginModel.findOne({email: this.body.email});
        if(this.user) this.erros.push("Usuário já existe");
    }

    valida() {
        this.cleanUp();
        // Validação...
        if(!validator.isEmail(this.body.email)) this.erros.push("E-mail inválido");
        if(!(this.body.password.length >= 3 && this.body.password.length <= 50)) this.erros.push("A senha precisa ter entre 3 e 50 caracteres");
    }

    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== "string") {
                this.body[key] = "";
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Login;