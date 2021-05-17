const Produto = require('./Produto'); //exportarção da classe Produto
const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produtosMercado = [
    new Produto("feijão", 5.50),
    new Produto("arroz", 10.90), 
    new Produto("melancia", 4.60), 
    new Produto("alface", 2.30), 
    new Produto("chocolate", 6.89)];

const validarLista = (listaMercado) => {
    if(!listaMercado){ //verifica se a lista está vazia, null, false ou undefined
        throw Error("A lista não pode ser vazia!"); //forçando um erro
    }

    const itensDesejados = listaMercado.split(",");//transformando a string de itens em uma lista de itens
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length; //trim é um método que tira os espaços

    if(itensInvalidos > 0){
        throw Error(`Existem ${itensInvalidos} items inválidos`);
    }
    return itensDesejados;
}

const verificaDisponibilidade = (listaValida) => {
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];

    for(const item of listaValida){
        const itemFormatado = item.trim().toLowerCase();
        if(produtosMercado.includes(itemFormatado)){
            produtosDisponiveis.push(itemFormatado); // o item é inserido dentro da lista produtos disponíveis
        }
        else{
            produtosIndisponiveis.push(itemFormatado);
        }
    }
    
    return {
        produtosDisponiveis,
        produtosIndisponiveis
    }
}

leitor.question(
        "Digite a lista de produtos separados por vírgula: \n",
        listaProdutos =>{
            try{
                const listValida = validarLista(listaProdutos);
                const disponibilidade = verificaDisponibilidade(listValida);

                console.log("Os seguintes produtos estão disponíveis: ", disponibilidade.produtosDisponiveis);
                console.log("Os seguintes produtos estão indisponíveis: ", disponibilidade.produtosIndisponiveis);

                const disponiveisOrdenados = disponibilidade.produtosDisponiveis.sort((produto1, produto2) => produto1.localeCompare(produto2));
                console.log("Produtos disponíveis em ordem alfabética: ", disponiveisOrdenados);
            }catch (e){
                console.log(`Erro ao processar a lista (${e.message})`) //pega a mensagem escrita lá em throw error e exibe
            }finally{
                leitor.close();

            }
        }
    );

