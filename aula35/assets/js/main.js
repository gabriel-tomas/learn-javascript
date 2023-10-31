function mainScope() {
    loopElementsToAdd();

    function loopElementsToAdd() {
        const elementos = [
            {tag: "p", texto: "Frase 1 (p)"},
            {tag: "div", texto: "Frase 2 (div)"},
            {tag: "footer", texto: "Frase 3 (footer)"},
            {tag: "section", texto: "Frase 3 (section)"},
        ]

        for(let i = 0; i < elementos.length; i++) {
            let {tag, texto} = elementos[i];
            let element = elementCreate(tag, texto);
            addToContainer(element);
        }
    }

    function elementCreate(tag, content) {
        const element = document.createElement(tag);
        const text = document.createTextNode(content);

        element.appendChild(text);

        return element;
    }

    function addToContainer(element) {
        const elementsContainer = document.querySelector(".elements-to-add-container");

        elementsContainer.appendChild(element);
    }

}

mainScope();