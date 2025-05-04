//Criar uma função que exibe "Olá, mundo!" no console.
function textoConsole(){
    console.log('Olá, Mundo!');
}
textoConsole();


//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console
function textoNomeconsole(){
    nomeUsuario = prompt('Qual seu nome? ');
    console.log(`Olá, ${nomeUsuario}!`);
}
textoNomeconsole()


//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroNumero(){
    num = parseInt(prompt('Digite um número: '));
    return console.log(`O dobro de ${num} é ${num*2}`);
}
dobroNumero()


//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumeros(){
    contador = soma = 0
    while (contador < 3){
        num = parseInt(prompt('Numero: '))
        contador ++
        soma += num
    }
    return console.log(`A média dos números digitados é ${soma/3}.`)
}
mediaNumeros()


//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numMaior(){
    maior = contadorV2 = 0
    while (contadorV2 < 2){
        num = parseInt(prompt('Digite um número: '))
        if (num > maior){
            maior = num
        }
        contadorV2 ++
    }
    return console.log(`O maior número é ${maior}`)
}
numMaior()


//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicarNum(){
    num = parseInt(prompt('Digite um número: '))
    return console.log(`${num} X ${num} = ${num*num}`)
}
multiplicarNum()