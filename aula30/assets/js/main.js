function mainScope() {
    // dia da semana em texto, {dia} de {mes} de {ano} {horas}:{minutos}
    text = getDate();
    innerTitleDate(text);

    function getDate() {
        const data = new Date();

        let diaSemanaText = getNameDia(data.getDay());
        let dia = data.getDate();
        let mes = getNameMes(data.getMonth());
        let ano = data.getFullYear();
        let horas = data.getHours();
        let minutos = data.getMinutes();
    
        let text = transformText(diaSemanaText, dia, mes, ano, horas, minutos);
        return text;
    }

    function getNameDia(dia) {
        const diasSemanasText = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
        return diasSemanasText[dia];
    }

    function getNameMes(mes) {
        const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        return meses[mes];
    }

    // function getDiaSemanaText(diaSemana) {
    //     switch(diaSemana) {
    //         case 0:
    //             return "domingo";
    //         case 1:
    //             return "segunda-feira";
    //         case 2:
    //             return "terça-feira";
    //         case 3:
    //             return "quarta-feira";
    //         case 4:
    //             return "quinta-feira";
    //         case 5:
    //             return "sexta-feira";
    //         case 6:
    //             return "sábado";
    //         default:
    //             return "";
    //     }
    // }

    // function getMesText(mes) {
    //     switch(mes) {
    //         case 0:
    //             return "janeiro";
    //         case 1:
    //             return "fevereiro";
    //         case 2:
    //             return "março";
    //         case 3:
    //             return "abril";
    //         case 4:
    //             return "maio";
    //         case 5:
    //             return "junho";
    //         case 6:
    //             return "julho";
    //         case 7:
    //             return "agosto";
    //         case 8:
    //             return "setembro";
    //         case 9:
    //             return "outubro";
    //         case 10:
    //             return "novembro";
    //         case 11:
    //             return "dezembro";
    //         default:
    //             return "";
    //     }
    // }

    function transformText(diaSemanaText, dia, mes, ano, horas, minutos) {
        return `${diaSemanaText}, ${dia} de ${mes} de ${ano} ${horas}:${minutos}`;
    }

    function innerTitleDate(text) {
        const title = document.querySelector(".titulo-data");

        title.innerHTML = text;
    }
}

mainScope();