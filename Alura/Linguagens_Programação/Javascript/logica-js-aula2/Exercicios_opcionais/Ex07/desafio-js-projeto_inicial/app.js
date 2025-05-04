//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(){
    let altura = parseFloat(prompt('Altura: '));
    let peso = parseFloat(prompt('Peso: '));
    let imc = peso / (altura*altura);
    return console.log(`Seu IMC: ${imc}`);
}
calcularIMC()


//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(){
    let numero = parseInt(prompt('Digite um número: '));
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return console.log(`O fatorial de ${numero} é: ${fatorial}`)
}
calcularFatorial()


//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterMoeda(){
    let dolar = 4.80;
    let reais = parseFloat(prompt('Valor em reais: R$'))
    return console.log(`O valor de R$${reais} foram convertidos em USD${reais/dolar}`)
}
converterMoeda()


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularArea(){
    let altura = parseFloat(prompt('Altura: '))
    let largura = parseFloat(prompt('Largura: '))
    alert(`A área de um retangulo de ${altura} de altura e ${largura} de largura é ${altura*largura}m²`)
}
calcularArea()


//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14
function calcularAreaCircular(area) {
    return Math.sqrt(area / Math.PI);
}
let area = 78.5;
let raio = calcularAreaCircular(area)
console.log(`O raio do círculo é: ${raio}`)


//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(){
    inicio = 0
    let numero = parseInt(prompt('Digite um número: '))
    while (inicio < 11){
        console.log(`${inicio} X ${numero} = ${inicio*numero}`)
        inicio++
    }
}
tabuada()