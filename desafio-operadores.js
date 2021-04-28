const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcula = (num1, num2, operacao) => {
    const primeiroNumero = parseInt(num1);
    const segundoNumero = parseInt(num2);
    switch(operacao){
        case '+': return primeiroNumero + segundoNumero;
        case '-': return primeiroNumero - segundoNumero;
        case '*': return primeiroNumero * segundoNumero;
        case '/': return primeiroNumero / segundoNumero;
        case '%': return primeiroNumero % segundoNumero;
        default: return 0;
    }
}

const qualOperador = "Digite a operação: \n"; 
leitor.question("Digite o primeiro número: \n", (primeiroNumero) => {
    console.log({primeiroNumero});
    leitor.question("Digite o segundo número: \n", (segundoNumero) => {
        console.log({segundoNumero});
        leitor.question(qualOperador, (operacao) => {
            const resultado = calcula(primeiroNumero, segundoNumero, operacao);
            console.log(resultado);

            leitor.close();
        })


    })
});