import validator from "validator";

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener("submit", e => {
            if(this.validate(e)) {
                e.preventDefault();
                return;
            }
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector("input[name='nome']");
        const emailInput = el.querySelector("input[name='email']");
        const telefoneInput = el.querySelector("input[name='telefone']");
        let error = false;

        if(!nomeInput.value) {
            error = true;
            alert('Campo "Nome" é obrigatório');
        }

        if(!(emailInput.value || telefoneInput.value)) {
            error = true;
            alert('Pelo menos um contato precisa ser adicionado: e-mail ou telefone');
        }

        if(emailInput.value) {
            if(!validator.isEmail(emailInput.value)) {
                error = true;
                alert('E-mail inválido');
            }
        }

        return error;
    }
}