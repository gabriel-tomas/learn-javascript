const userNumber = Number(prompt("Digite um número: "));
const textUserNumber = document.getElementById("client-number");
const containerText = document.getElementById("container-text");

const raizQuadrada = Math.sqrt(userNumber);
const eInt = Number.isInteger(userNumber);
const eNaN = Number.isNaN(userNumber);
const arredondarCeil = Math.ceil(userNumber);
const arredondarFloor = Math.floor(userNumber);
const duasDecimais = userNumber.toFixed(2);

textUserNumber.innerHTML = userNumber;
containerText.innerHTML = `
<p class="paragrah">Raiz quadrada: <span class="accent">${raizQuadrada}</span></p>
<p class="paragrah">${userNumber} é inteiro: <span class="accent">${eInt}</span></p>
<p class="paragrah">É NaN: <span class="accent">${eNaN}</span></p>
<p class="paragrah">Arredondado para baixo: <span class="accent">${arredondarFloor}</span></p>
<p class="paragrah">Arredondado para cima: <span class="accent">${arredondarCeil}</span></p>
<p class="paragrah">Com duas casas decimais: <span class="accent">${duasDecimais}</span></p>
`;