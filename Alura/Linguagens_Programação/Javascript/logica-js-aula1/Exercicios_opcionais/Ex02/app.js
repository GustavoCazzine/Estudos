//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
diaDaSemana = prompt('Qual é o dia da semana?').toUpperCase();
if (diaDaSemana == 'SABADO') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'DOMINGO') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}


//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt('Digite um número')
if (numero < 0){
    alert('O número é negativo')
} else if (numero > 0){
    alert('O número é positivo')
}


//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
pontuacao = prompt('Qual a pontuação que você alcançou?');
if (pontuacao >= 100){
    alert('Parabéns, você venceu!')
} else if (pontuacao < 100) {    
    alert('Tente novamente para ganhar.');
}


//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = prompt('Qual seu saldo da conta bancaria? ')
alert(`Seu saldo da conta bancaria é R$${saldoConta}`)


//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
nomeUruario = prompt('Qual seu nome? ')
alert(`Ola ${nomeUruario}, sejá muito bem vindo ao nosso site!`)