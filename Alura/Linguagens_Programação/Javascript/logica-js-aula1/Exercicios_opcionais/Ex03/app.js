//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 0;
while (contador < 11){
    alert(contador);
    contador ++;
}


//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número
let contadorReverso = 10;
while (contadorReverso > -1){
    alert(contadorReverso);
    contadorReverso --
}


//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = 10
while (numero > -1){
    console.log(numero);
    numero --
}


//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroContador = prompt('Digite um número para fazer a contagem: ')
let contadoR = 0
while (contadoR < numeroContador + 1){
    console.log(contadoR);
    contadoR ++
}