//Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.


//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio.';


//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function apertarConsole(){
    console.log('O botão Console foi clicado.');
}


//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function apertarAlerta(){
    alert('Eu amo JS');
}


//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function apertarPrompt(){
    let nomeCidade = prompt('Nome de uma cidade: ');
    alert(`Estive em ${nomeCidade} e lembrei de você.`);
}


//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function apertarSoma(){
    num01 = parseInt(prompt('Primeiro número: '))
    num02 = parseInt(prompt('Segundo número: '))
    alert(`A soma de ${num01} + ${num02} é ${num01 + num02}`)
}