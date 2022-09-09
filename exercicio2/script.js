/*Exercicio 2

Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. 
No arquivo `script,js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!

*/

const nacionalidade = prompt("Digite a sua nacionalidade: \n\"Brasileira\" ou \"Argentina\" ou \"Uruguaia\" ou \"Chilena\" ou \"Colombiana\"")

switch (nacionalidade.trim().toLowerCase()){
    case "brasileira":
        console.log("Você é Brasileiro!!")
        break
    case "argentina":
        console.log("Você é Argentino!!")
        break
    case "uruguaia":
        console.log("Você é Uruguaio!!")
        break
    case "chilena":
        console.log("Você é Chileno!!")
        break
    case "colombiana":
        console.log("Você é Colômbiano!!")
        break
    default:
        console.log("Nacionalidade não encontrada!")
}

//Fim do Exercicio 2

/*let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}*/