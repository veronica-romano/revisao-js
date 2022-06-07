/* // descobrir se alguém já pode dirigir no brasil

const nome = "Marquinhos";
const nasc = 1990;
var data = new Date();
var anoAtual = data.getFullYear();

let idade = anoAtual - nasc;



if (idade >= 18) {
    console.log(` ${nome}, você pode dirigir porque tem ${idade} anos.`);
    if (idade >= 30) {
        console.log(` ${nome}, você deveria comprar um carro novo porque tem ${idade} anos.`);
    } else{
        console.log(` ${nome}, você deveria comprar um carro usado porque tem ${idade} anos.`);
    }
} else {
    console.log(` ${nome}, você não pode dirigir porque tem ${idade} anos.`);
} */



// variação 1 - O usuário digita nome e nascimento pelo promt na tela

const nomeUser = prompt("Digite seu nome: ");
const nascUser = prompt("Ano de nascimento com 4 dígitos: ")

let dataUser =  new Date();
let anoAtualUser = dataUser.getFullYear();
let idadeUser = anoAtualUser - nascUser;
let conteudo = document.getElementById("conteudo");

if (idadeUser >= 18) {
    conteudo.innerHTML = `${nomeUser}, você pode dirigir porque tem ${idadeUser} anos.`
    if (idadeUser > 30) {
        conteudo.innerHTML += `<br>${nomeUser}, você deveria comprar um carro novo porque tem ${idadeUser} anos.`
    } else{
        conteudo.innerHTML += `<br>${nomeUser}, você deveria comprar um carro usado porque tem ${idadeUser} anos.`
    }
} else{
    conteudo.innerHTML = `${nomeUser}, você NÃO pode dirigir porque ainda tem ${idadeUser} anos.`
}


// variação 2 - usando função

function podeDirigir(nome, nasc) {
var data = new Date();
var anoAtual = data.getFullYear();

let idade = anoAtual - nasc;



if (idade >= 18) {
    console.log(` ${nome}, você pode dirigir porque tem ${idade} anos.`);
    if (idade >= 30) {
        console.log(` ${nome}, você deveria comprar um carro novo porque tem ${idade} anos.`);
    } else{
        console.log(` ${nome}, você deveria comprar um carro usado porque tem ${idade} anos.`);
    }
} else {
    console.log(` ${nome}, você não pode dirigir porque tem ${idade} anos.`);
}
    
}

podeDirigir("João", 1973);
podeDirigir("Ana", 1994);
podeDirigir("Vero", 2006); 