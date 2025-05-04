alert('Boas Vindas ao jogo do número secreto');
let numMaximo = parseInt(prompt('Quer sortear um número de 0 até quanto: '));
let numeroSecreto = parseInt(Math.random() * numMaximo + 1);
console.log(`Número secreto: ${numeroSecreto}`);
let chuteNumeroSecreto;
let tentativas = 0;
// enquanto chuteNumeroSecreto não for igual ao numeroSecreto
while (chuteNumeroSecreto != numeroSecreto) {
    chuteNumeroSecreto = prompt(`Chute um número de 0 a ${numMaximo}: `);
    tentativas ++;
    //Se (if) o chuteNumeroSecreto for igual ao numeroSecreto
    if (chuteNumeroSecreto == numeroSecreto) {
        break
    } else {
        if(chuteNumeroSecreto < numeroSecreto){
            alert(`O número secreto é maior que ${chuteNumeroSecreto}`);
        } else {
            alert(`O número secreto é menor que ${chuteNumeroSecreto}`);
        }
    }
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
