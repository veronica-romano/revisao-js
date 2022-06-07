const nome = ["josé", "João", "Maria", "Lucas"];
const nasc = [1983, 2012, 2000, 1945];
const data = new Date();
const ano = data.getFullYear();




let contador = 0;
while (contador < nome.length) {
    
    let idade = ano - nasc[contador];

    if (idade >= 18) {
        console.log(`${nome[contador]} tem ${idade} anos e pode dirigir`);
    } else{
        console.log(`${nome[contador]} tem ${idade} anos e NÃO pode dirigir`);
    }
    
    contador++;

}



