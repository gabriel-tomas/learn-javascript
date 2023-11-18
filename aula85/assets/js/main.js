(()=> {
    const formEl = document.querySelector(".form");

    class Form {
        constructor(nome, sobrenome, cpf, user, password, repeatPassword) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.cpf = cpf;
            this.user = user;
            this.password = password;
            this.repeatPassword = repeatPassword;
        }

        validMain() {
            for(let errorText of formEl.querySelectorAll(".error-message")) {
                errorText.remove();
            }
            for(let value in this) {
                if(this[value].value === "") {
                    this.addMessage(this[value], `Campo '${this[value].parentElement.innerText.replace(":", "")}' não pode estar vazio`);
                }
                if(this[value].classList.contains("input-cpf")) {
                    this.validCpf(this[value]);
                };
            }
        }

        validCpf(campo) {
            const cpf = new ValidarCpf(this.cpf.value).valida();

            console.log(cpf, this.cpf.value);

            if(!cpf) {
                this.addMessage(campo, "CPF inválido");
            };
        }

        addMessage(el, message) {
            el.parentElement.appendChild(Form.createElement("span", message));
        }

        static createElement(el, content) {
            el = document.createElement(el);
            el.classList.add("error-message");
            el.innerText = content;
            return el;
        }
    }

    class User extends Form {
        constructor(nome, sobrenome, cpf, user, password, repeatPassword) {
            super(nome, sobrenome, cpf, user, password, repeatPassword);
        }
        
        validUser() {
            const onlyLAndN = this.validOnlyLAndN();
            if(!onlyLAndN) { 
                this.addMessage(this.user, "Usuário inválido");
            }
            if(!this.validBtw3and12()) {
                this.addMessage(this.user, "Usuário deverá conter entre 3 e 12 caracteres");
            }
        }

        validOnlyLAndN() {
            if(this.user.value === "") return false;
            for(let l of this.user.value) {
                if(l === " " || l === "") {
                    return false;
                }
            };
            return true;
        }

        validBtw3and12() {
            if(!(this.user.value.length >= 3 && this.user.value.length <= 12)) {
                return false;
            }
            return true;
        }
    }

    class Password extends Form {
        constructor(nome, sobrenome, cpf, user, password, repeatPassword) {
            super(nome, sobrenome, cpf, user, password, repeatPassword);
        }

        validPassword() {
            if(!this.validEqualPasswords()) {
                this.addMessage(this.password, "Senha precisam ser iguais");
                this.addMessage(this.repeatPassword, "Senha precisam ser iguais");
            }
            if(!this.validBtw6and12()) {
                this.addMessage(this.password, "Senha precisa ter entre 6 e 12 caracteres");
            }
        }

        validBtw6and12() {
            if(!(this.password.value.length >= 6 && this.password.value.length <= 12)) {
                return false;
            }
            return true;
        }

        validEqualPasswords() {
            if(this.password.value === this.repeatPassword.value) {
                return true;
            }
            return false;
        }
    }

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        const objEls = getAllInputs();
        const {nome, sobrenome, cpf, user, password, repeatPassword} = objEls;
        const validForm = new Form(nome, sobrenome, cpf, user, password, repeatPassword);
        const validUser = new User(nome, sobrenome, cpf, user, password, repeatPassword);
        const validPassword = new Password(nome, sobrenome, cpf, user, password, repeatPassword);

        validForm.validMain();
        validUser.validUser();
        validPassword.validPassword();
        if(formEl.querySelectorAll(".error-message").length === 0) {
            alert("Formulário enviado");
            formEl.submit();
        };
    })

    function getAllInputs() {
        const obj = {
            nome: document.querySelector("#input-nome"), 
            sobrenome: document.querySelector("#input-sobrenome"),
            cpf: document.querySelector("#input-cpf"),
            user: document.querySelector("#input-user"),
            password: document.querySelector("#input-password"),
            repeatPassword: document.querySelector("#input-repeat-password")
        };

        return obj;
    }
})()