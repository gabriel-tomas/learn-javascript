function Calculadora() {
    this.display =  document.querySelector(".display-result");
    this.containerCalculadora = document.querySelector(".container");


    this.start = () => {
        cliqueBotoes();
        pressionaEnter();
    };

    const btnToDisplay = value => this.display.value += value;

    const cliqueBotoes = () => {
        this.containerCalculadora.addEventListener("click", e => {
            const el = e.target;

            if(el.classList.contains("btn-num")) btnToDisplay(el.innerText);
            if(el.classList.contains("btn-del")) erase();
            if(el.classList.contains("btn-del-all")) erase(true);
            if(el.classList.contains("btn-eq")) fazConta();
            focusInInput();
        });
    };

    const pressionaEnter = () => {
        document.addEventListener("keypress", e => {
            if(e.key === "Enter") {
                fazConta();    
            };
        });
    };

    const erase = all => {
        if(all) return this.display.value = "";
        this.display.value = this.display.value.slice(0, -1);
    };

    const fazConta = () => {
        try {
            const conta = eval(this.display.value);
            
            if(!conta) {
                alert("Conta inválida 2");
                return;
            }

            this.display.value = conta;
        } catch {
            alert("Conta inválida");
        }
    }

    const focusInInput = () => {
        this.display.focus();
    }
}

const calculadora = new Calculadora();
calculadora.start();