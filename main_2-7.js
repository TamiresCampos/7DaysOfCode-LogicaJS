const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const msg = `Olá, ${nome}! Você tem ${idade} anos e está estudando ${linguagem}, que massa!`;

alert(msg);


const escolha = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
    if (escolha == 1){
        alert ('Muito bom! Continue estudando e você terá muito sucesso');
    }
    else{
        alert ('Ahh que pena... Já tentou aprender outras linguagens?')
    }
   

    