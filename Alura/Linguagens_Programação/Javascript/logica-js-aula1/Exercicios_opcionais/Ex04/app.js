//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas!')


//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Gustavo'
console.log(`Olá, ${nome}.`)


//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nomeTela = 'Gustavo'
alert(`Olá ${nomeTela}.`)


//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt('Qual a linguagem de programação que você mais gosta? ')
console.log(`${linguagem}`)


//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor01 = parseInt(prompt('Primeiro valor: '))
let valor02 = parseInt(prompt('Segundo valor: '))
let resultado = valor01 + valor02
console.log(`${valor01} + ${valor02} = ${resultado}`)


//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor001 = parseInt(prompt('Primeiro Valor: '))
let valor002 = parseInt(prompt('Segundo valor: '))
let resultado001 = valor001 - valor002
console.log(`${valor001} - ${valor002} = ${resultado001}`)


//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
iDade = parseInt(prompt('Digite sua idade: '))
if (iDade >= 18 && iDade <= 110){
    console.log('Você é maior de idade')
} else if (iDade < 18 && iDade > 0) {
    console.log('Você é menor de idade')
} else {
    console.log('Idade inválida')
}


//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
numeRo = parseInt(prompt('Digite um número para saber se é Positivo/Negativo: '));
if (numeRo >=0){
    alert('Número digitado é positivo');
} else {
    alert('Número digitado é negativo');
}


//Use um loop while para imprimir os números de 1 a 10 no console.
let cont = 0;
while (cont < 11){
    console.log(cont);
    cont ++;
}


//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = parseFloat(prompt('Digite sua nota: '))
if (nota >= 7){
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}


//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log(Math.random())


//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log(parseInt(Math.random() * 10 + 1))


//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console
console.log(parseInt(Math.random() * 100 + 1))