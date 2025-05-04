let valorCompra = 1000;
let comprasCliente = 2;
let categoriaCliente = '';
let porcentagemDesconto = 0;
let valorCupom = 'PRIMECOMPRA';
let statusFrete = 'Pago';

function definirCategoria() {
    if (comprasCliente >= 1 && comprasCliente <= 5) {
        categoriaCliente = 'Bronze';
    } else if (comprasCliente <= 15) {
        categoriaCliente = 'Prata';
    } else if (comprasCliente > 15) {
        categoriaCliente = 'Ouro';
    } else {
        categoriaCliente = 'Sem categoria';
    }
    return categoriaCliente;
}

function definirDescontoFidelidade() {
    if (categoriaCliente === "Bronze") {
        return 2;
    } else if (categoriaCliente === 'Prata') {
        return 5;
    } else if (categoriaCliente === 'Ouro') {
        return 10;
    }
    return 0;
}

function aplicarCupom() {
    let descontoCupom = 0;
    
    if (valorCupom === "FRETEGRATIS") {
        statusFrete = 'Frete Grátis';
    } else if (valorCupom === 'DESCONTO10') {
        descontoCupom = 10;
    } else if (valorCupom === 'PRIMECOMPRA' && comprasCliente <= 3) {
        descontoCupom = 15;
        // Sobrescreve desconto de fidelidade
        porcentagemDesconto = descontoCupom;
        return;
    }
    
    porcentagemDesconto += descontoCupom;
}

function calcularFrete() {
    if (valorCupom === "FRETEGRATIS" || categoriaCliente === 'Ouro') {
        statusFrete = 'Frete Grátis';
    } else if (valorCompra >= 200) {
        statusFrete = 'Frete Grátis';
    } else {
        statusFrete = 'Pago';
    }
}

function limitarDesconto() {
    porcentagemDesconto = Math.min(porcentagemDesconto, 30);
}

function calcularValorFinal() {
    return valorCompra - (valorCompra * (porcentagemDesconto / 100));
}

// Fluxo principal
definirCategoria();
porcentagemDesconto = definirDescontoFidelidade();
aplicarCupom();
limitarDesconto();
calcularFrete();
const valorFinal = calcularValorFinal();

// Saída
console.log(`Valor Original: R$${valorCompra.toFixed(2)}`);
console.log(`Categoria: ${categoriaCliente} | Desconto Fidelidade: ${definirDescontoFidelidade()}%`);
console.log(`Cupom Aplicado: ${valorCupom} | Desconto Total: ${porcentagemDesconto}%`);
console.log(`Valor Final: R$${valorFinal.toFixed(2)}`);
console.log(`Status do Frete: ${statusFrete}`);