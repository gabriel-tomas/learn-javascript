function mainScope() {
    const temporizador = document.querySelector(".temporizador");
    const buttonsContainer = document.querySelector(".buttons-container");
    let tempoCorridoSegundos = 0;
    let setIntervalTimer;

    buttonsContainer.addEventListener("click", (e) => {
        const el = e.target.classList;
        
        if(el.contains("iniciar-button")) {
            setIntervalTimer = startTimer();
        } else if(el.contains("pausar-button")) {
            stopTimer();
        } else if(el.contains("zerar-button")) {
            clearTimer();
        }
    })

    function startTimer() {
        clearInterval(setIntervalTimer);
        timerInterval = setInterval(() => {
            let timer = addTimer();
            showTimer(timer);
        }, 1000);
        startClearStyle();
        return timerInterval;
    }

    function addTimer() {
        tempoCorridoSegundos += 1;
        const time = new Date(2023, 1, 1, 0, 0, tempoCorridoSegundos).
        toLocaleTimeString("pt-br", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        return time;
    }

    function stopTimer() {
        clearInterval(setIntervalTimer);
        stopStyle();
    }

    function clearTimer() {
        clearInterval(setIntervalTimer);
        tempoCorridoSegundos = 0;
        showTimer("00:00:00");
        startClearStyle();
    }

    function showTimer(timer) {
        temporizador.innerHTML = "";
        const text = document.createTextNode(timer);
        temporizador.appendChild(text);
    }

    function stopStyle() {
        temporizador.style.color = "#d54a4a";
    }

    function startClearStyle() {
        temporizador.style.color = "#000";
    }
}

mainScope();