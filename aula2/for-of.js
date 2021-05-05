const novosAlunos = ["Douglas", "Amanda", "Izaura"];

const darBoasVindas = (nomeAluno) => {
    console.log(`Seja bem-vindo(a), ${nomeAluno}!`);
}

for(const aluno of novosAlunos){
    darBoasVindas(aluno);
}