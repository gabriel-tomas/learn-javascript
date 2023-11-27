import GeraCPF from "./modules/GeraCPF.js"

import './assets/css/style.css';

(() => {
    const geraNovoCpf = new GeraCPF().geraNovoCpf();
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = geraNovoCpf;
})();