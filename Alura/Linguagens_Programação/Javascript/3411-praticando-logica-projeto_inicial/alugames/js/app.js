function alterarStatus(id) {
    const item = document.getElementById(`game-${id}`);
    const botao = item.querySelector('.dashboard__item__button');
    const imagem = item.querySelector('.dashboard__item__img');

    if (botao.textContent === "Alugar") {
        // Muda para "Devolver"
        botao.textContent = "Devolver";
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
    } else {
        // Muda para "Alugar"
        botao.textContent = "Alugar";
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
    }
}
