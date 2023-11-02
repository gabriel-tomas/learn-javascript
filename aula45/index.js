function horaAtual(date) {
    if(!(date instanceof Date)) {
        throw("Sem instância Date");
    } else {
        return date.toLocaleTimeString("pt-br");
    }
}

try {
    console.log(horaAtual(new Date()));
} catch(e) {
    console.log(e);
} finally {
    console.log("Tenha um bom dia");
}