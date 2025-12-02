const nome = "Diêgo S. Queiroz"; //Em uma constante o valor não pode ser alterado.
let nome2 = "Diêgo S. Queiroz"; //Em uma let o valor pode ser alterado.
//Criação de um objeto:
let pessoaDefault = {
    nome: "Diêgo Santos",
    idade: "21",
    profissao: "Programador"
}

//Array: usado quando quero criar uma lista
let nomes=["Diêgo", "Milena", "Maria", "Jaimilton"];
let pessoasListaVazia=[];
let pessoas=[
    {
        nome: "Diêgo Santos",
        idade: "21",
        profissao: "Programador"
    },
    {
        nome: "Milena Lacerda",
        idade: "21",
        profissao: "Eng. Ambiental"
    }
];

//Função para alterar uma variável:
function alterarNome(){
    nome2= "Milena Lacerda Avelar";
    console.log("Valor alterado: ");
    console.log(nome2);
}

function recebeEAlteraNome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome: ");
    console.log(nome2);
}
//Função de imprimir pessoa:
function imprimirPessoa(pessoa){
    console.log(pessoa);
    console.log("Nome: ");
    console.log(pessoa.nome);
    console.log("Idade: ");
    console.log(pessoa.idade);
    console.log("Profissão: ");
    console.log(pessoa.profissao);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)
}

function imprimirPessoas(){
    console.log("--------Imprimir Pessoas--------")
    pessoas.forEach((item) => {
        console.log("Nome: ");
        console.log(item.Nome);
        console.log("Idade: ");
        console.log(item.idade);
        console.log("Profissão: ");
        console.log(item.profissao);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Diêgo Santos",
    idade: "22",
    profissao: "Programador Web"
});

imprimirPessoas();

//Imprimir valores:
//console.log(pessoas);
//console.log(nomes[0]);
//console.log(pessoas);
//imprimirPessoa(pessoaDefault);
// imprimirPessoa({
//     nome: "Milena Lacerda",
//     idade: "21",
//     profissao: "Eng. Ambiental"
// })
//recebeEAlteraNome("Milena Lacerda Queiroz");
//recebeEAlteraNome("Milena Lacerda Avelar");
//alterarNome();