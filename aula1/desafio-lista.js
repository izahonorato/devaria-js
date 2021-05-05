const listaPessoas = ["Douglas", "Rafael", "Amanda"];

const nome = process.argv[2];
const idade = parseInt(process.argv[3]);

if(!listaPessoas.includes(nome)){
    console.log("Não está na lista!");
    return;
}

if(idade < 18){
    console.log("Festa para maiores de 18");
    return;
}

console.log("Bem-vindo(a) à festa");