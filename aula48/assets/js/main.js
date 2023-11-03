function mainScope() {
    const btnAddTarefa = document.querySelector(".btn-add-tarefa");
    const inputTarefa = document.querySelector(".container-tarefa > .input-tarefa");
    const listTarefasContainer = document.querySelector(".lista-tarefas-container");

    btnAddTarefa.addEventListener("click", () => {
        if(!inputTarefa.value) return;
        createTarefa(inputTarefa.value);
    });

    inputTarefa.addEventListener("keypress", (e) => {
        if(e.key === "Enter") {
            if(!inputTarefa.value) return;
            createTarefa(inputTarefa.value);
        }
    });

    function createTarefa(tarefa) {
        let liEl = createEl("li", tarefa);
        
        listTarefasContainer.appendChild(liEl);
        createApagarBtn(liEl);
        clearInput();
        salvarTarefas();
    }

    function createApagarBtn(li) {
        let btnApagar = createEl("button", "Apagar", "btn-apagar-tarefa")

        li.appendChild(btnApagar);
        apagarTarefa(btnApagar);
    }

    function createEl(element, content, className = false) {
        let el = document.createElement(element);
        
        el.innerText = content;

        if(className) {
            el = addClass(el, className);
        }

        return el;
    }

    function clearInput() {
        inputTarefa.value = "";
        inputTarefa.focus();
    }

    function addClass(el, className) {
        el.setAttribute("class", className);

        return el;
    }

    function apagarTarefa(btn) {
        btn.addEventListener("click", (e) => {
            e.target.parentElement.remove();
            salvarTarefas()
        });
    }

    function salvarTarefas() {
        const tarefasLi = listTarefasContainer.querySelectorAll("li");
        const tarefasList = [];

        for(let tarefa of tarefasLi) {
            tarefasList.push(tarefa.innerText.replace("Apagar", ""));
        }

        const tarefasJSON = JSON.stringify(tarefasList);
        localStorage.setItem("tarefas", tarefasJSON);
    }

    function pegarTarefasSalvas() {
        const tarefas = localStorage.getItem("tarefas");
        return JSON.parse(tarefas);
    }

    function addTarefasSalvas(tarefas) {
        for(let tarefa of tarefas) {
            createTarefa(tarefa.replace("\n", ""));
        }
    }

    addTarefasSalvas(pegarTarefasSalvas());
}

mainScope();