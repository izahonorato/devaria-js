const FormaPagamento = require('./FormaPagamento');

class Pix extends FormaPagamento{
    efetuarPagamento(valor){
        console.log(`Efetuando pagamento de R$${valor} com Pix`);
    }
}

module.exports = Pix;