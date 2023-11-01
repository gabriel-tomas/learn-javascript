const containerP = document.querySelector(".paragrafos");
const paragrafos = containerP.querySelectorAll("p");

const bodyStyles = getComputedStyle(document.body);
const backgroundColorBody = bodyStyles.backgroundColor;

for(let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
}
