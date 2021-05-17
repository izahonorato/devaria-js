const Boleto = require('./Boleto');
const Pix = require('./Pix');
const TipoPagamento = require('./TipoPagamento');

//recebendo forma de pagamento e valor
const formaPagamento = process.argv[2];
const valor = process.argv[3];

//validar os parâmetros de entrada
if(!formaPagamento){
    console.log("Forma de pagamento não informada!");
    return;
}

if(!valor){
    console.log("Valor não informado!");
    return;
}

//identificar a forma de pagamento
let objetoFormaPagamento;
const eBoleto = formaPagamento.toLowerCase() === TipoPagamento.BOLETO.toLowerCase();
const ePix = formaPagamento.toLowerCase() === TipoPagamento.PIX.toLowerCase();
if(eBoleto){
    objetoFormaPagamento = new Boleto();                       
}
else if(ePix){
    objetoFormaPagamento = new Pix();
}
else{
    console.log("Forma de pagamento inválida!");
}

//efetuar o pagamento
objetoFormaPagamento.efetuarPagamento(valor);