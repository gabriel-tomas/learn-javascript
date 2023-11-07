function criaCalculadora() {
    return {
        display: document.querySelector(".display-result"),


        start() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        btnToDisplay(value) {
            this.display.value += value;
        },

        cliqueBotoes() {
            document.addEventListener("click", (e) => {
                const el = e.target;

                if(el.classList.contains("btn-num")) {
                    this.btnToDisplay(el.innerText);
                }
                if(el.classList.contains("btn-del")) {
                    this.erase();
                }
                if(el.classList.contains("btn-del-all")) {
                    this.erase(true);
                }
                if(el.classList.contains("btn-eq")) {
                    this.fazConta();
                }
            });
        },

        pressionaEnter() {
            this.display.addEventListener("keypress", e => {
                if(e.key === "Enter") this.fazConta();
            });
        },

        erase(all) {
            if(all) return this.display.value = "";
            this.display.value = this.display.value.slice(0, -1);
        },

        fazConta() {
            try {
                this.display.value = eval(this.display.value);
            } catch {
                alert("Conta inválida");
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.start();