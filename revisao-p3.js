let nome = document.getElementById("nome").value;
let nasc = document.getElementById("nasc").value;
var data = new Date();
var ano = data.getFullYear();
let idade = ano - nasc;

console.log(idade);



