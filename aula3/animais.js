//importando as classes
const Mamifero = require('./Mamifero');
const Ave = require('./Ave');
const Peixe = require('./Peixe');
const Reptil = require('./Reptil');

//recebendo o nome do animal
const nomeAnimal = process.argv[2];

if(!nomeAnimal){ //se não for passado nenhum nome
    console.log("Favor informar o nome do animal!");
    return;
}

//define a lista de animais no nosso "banco de dados"
const listaAnimais = [
    new Mamifero("Vaca", 4),
    new Reptil("Cobra"),
    new Ave("Gavião", true),
    new Peixe("Tubarão", 2)
];

//identificando o animal digitado
const animalSelecionado = listaAnimais.find(animal => animal.nome.toLowerCase() === nomeAnimal.toLowerCase());

//validar se o animal foi encontrado
if(!animalSelecionado){
    console.log("O animal não está na nossa lista de animais");
    return;
}

//identificando a qual grupo o animal pertence
if(animalSelecionado instanceof Mamifero){ //verifica se o objeto da esquerda é instância da classe
    console.log(`O animal encontrado é um mamífero com nome ${animalSelecionado.nome} e tem
    ${animalSelecionado.qtdeMamas} mamas`);
}
else if(animalSelecionado instanceof Ave){
    console.log(`O animal encontrado é uma ave com nome ${animalSelecionado.nome}
    e voa: ${animalSelecionado.voa}`);
}
else if(animalSelecionado instanceof Reptil){
    console.log(`O animal encontrado é uma réptil com nome ${animalSelecionado.nome}
    e controla temperatura do corpo: ${animalSelecionado.controlaTemperatura}`);
}
else if(animalSelecionado instanceof Peixe){
    console.log(`O animal encontrado é um peixe com nome ${animalSelecionado.nome}
    e tem ${animalSelecionado.qtdeNadadeiras} nadadeiras`);
}


    

