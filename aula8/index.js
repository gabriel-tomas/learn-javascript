/* {nome} {sobrenome} tem {idade} anos, pesa {peso} kg tem {altura} de altura e seu IMC é de {imc}
   {nome} nasceu em {anoNascimento} */

const nome = "Gabriel Gomes";
const sobrenome = "Tomás";
const idade = 19;
const peso = 70;
const altura = 1.70;

let imc;
let anoNascimento;

imc = peso / (altura^2);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);