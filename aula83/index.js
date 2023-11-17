class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume++;
    }
    diminuirVolume() {
        this.volume--;
    }

    // Método estático
    static trocaPilha() {
        console.log("Trocando...");
    }
}

const controle1 = new ControleRemoto("Samsung");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaPilha();