function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
