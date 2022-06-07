
let formulario = document.querySelector("form");
formulario.addEventListener('submit', function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let nasc = document.getElementById("nasc").value;

    var data = new Date();
    var ano = data.getFullYear();
    let idade = ano - nasc;

    if (idade >= 18) {
        conteudo.innerHTML = `${nome} tem ${idade} anos e já pode dirigir.`
        if (idade > 30) {
            conteudo.innerHTML = `${nome}, aconselhamos comprar um carro novo pois você tem ${idade} anos.`
        } else{
            conteudo.innerHTML = `${nome}, aconselhamos comprar um carro usado pois você tem ${idade} anos.`
        }
    } else{
        conteudo.innerHTML = `${nome} tem ${idade} anos e NÃO pode dirigir.`
    }

})

   





