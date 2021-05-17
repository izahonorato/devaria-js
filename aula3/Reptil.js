const Animal = require('./Animal');

class Reptil extends Animal{
    constructor(nome, controlaTemperatura){
        super(nome);
        this.controlaTemperatura = controlaTemperatura || false; //o valor default é false, logo, por padrão o réptil não controla a temperatura
    }
}

module.exports = Reptil;