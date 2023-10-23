const data = new Date();
const diaSemana = data.getDay();
function getDayName(diaSemana) {
    let diaSemanaText;

    switch(diaSemana) {
    case 0:
        diaSemanaText = "domingo";
        return diaSemanaText;
    case 1:
        diaSemanaText = "segunda";
        return diaSemanaText;
    case 2:
        diaSemanaText = "terça";
        return diaSemanaText;
    case 3:
        diaSemanaText = "quarta";
        return diaSemanaText;
    case 4:
        diaSemanaText = "quinta";
        return diaSemanaText;
    case 5:
        diaSemanaText = "sexta";
        return diaSemanaText;
    case 6:
        diaSemanaText = "sábado";
        return diaSemanaText;
    default:
        diaSemanaText = "";
        return diaSemanaText;
    }
}

console.log(diaSemana, getDayName(diaSemana));
// if(diaSemana === 0) diaSemanaText = "domingo";
// else if(diaSemana === 1) diaSemanaText = "segunda";
// else if(diaSemana === 2) diaSemanaText = "terça";
// else if(diaSemana === 3) diaSemanaText = "quarta";
// else if(diaSemana === 4) diaSemanaText = "quinta";
// else if(diaSemana === 5) diaSemanaText = "sexta";
// else if(diaSemana === 6) diaSemanaText = "sábado";
