/* Exercicio 1

Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
Faça isso:
    
1. Utilizando ifs aninhados
```jsx
    if(expressao){
        if(expressao){

        }
    }
```
2. Utilizando um operador lógico para unir duas operações relacionais
```jsx
    if(expressao && expressao){ //&& para E
    //expressao || expressao para OU     
    
    }
*/

// 1.

let num = Number(prompt("Digite um numero:"))

if (num %2===0){
    console.log("O numero é divisivel por 2")
    if(num %3===0){
        console.log("O numero é divisivel por 3")
    } else{
        console.log("O numero não é divisivel por 3")
    }
} else{
    console.log("O numero não é divisivel por 2")
    if(num %3===0){
        console.log("O numero é divisivel por 3")
    } else{
        console.log("O numero não é divisivel por 3")
    }
}

// 2.

if(num%2===0 || num%3===0){
    console.log("O seu numero é divisivel por 2 ou por 3")
} else{
    console.log("O seu numero não é divisivel por 2 nem por 3")
}

//Fim do Exercicio 1