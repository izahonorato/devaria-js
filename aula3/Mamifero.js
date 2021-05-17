//mamifero é classe filha entao precisa importar a classe Animal
const Animal = require('./Animal');

class Mamifero extends Animal{
    constructor(nome, qtdeMamas){
        super(nome); //super faz a chamada do construtor da classe animal
        this.qtdeMamas = qtdeMamas;
    }
}

module.exports = Mamifero;