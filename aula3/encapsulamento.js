class Produto{
    #nome;//todos os atributos são privados e só podem ser usados dentro do escopo da classe
    #preco;
    #tipo;

    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
        this.#tipo = 'móvel';
    }
//dá acesso ao atributo nome fora do escopo da classe
    get nome(){
        return this.#nome;
    }

    get preco(){
        return this.#preco;
    }
}

const produto = new Produto("Monitor", 2500);
console.log(produto.nome, produto.preco); 