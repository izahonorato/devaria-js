const Animal = require('./Animal');

class Peixe extends Animal{
    constructor(nome, qtdeNadadeiras){
        super(nome);
        this.qtdeNadadeiras = qtdeNadadeiras;
    }
}
module.exports = Peixe;