document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector('.catalogo__carrossel');
    const destacado = carrossel.querySelector('.catalogo__card.destacado');

    if (carrossel && destacado) {
        const carrosselRect = carrossel.getBoundingClientRect();
        const destacadoRect = destacado.getBoundingClientRect();

        const scrollLeft = destacado.offsetLeft - (carrossel.clientWidth / 2) + (destacado.clientWidth / 2);
        carrossel.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const whatsappButton = document.querySelector('.whatsapp-button');
    const whatsappTooltip = document.querySelector('.whatsapp-tooltip');
    let tooltipShown = false;

    function toggleWhatsAppButton() {
        if (window.scrollY > 100) {
            whatsappButton.classList.add('visible');
            whatsappButton.classList.remove('hidden');

            if (!tooltipShown) {
                whatsappTooltip.classList.add('visible');
                tooltipShown = true;

                setTimeout(() => {
                    whatsappTooltip.classList.add('fade-out');

                    setTimeout(() => {
                        whatsappTooltip.classList.remove('visible', 'fade-out');
                    }, 500);
                }, 2000);
            }
        }
    }

    window.addEventListener('scroll', debounce(toggleWhatsAppButton, 100));
    toggleWhatsAppButton(); // Define o estado inicial
});


// Cards Feedbacks
const slides = [
    {
        nome: "Ana Souza",
        texto: "Amei o atendimento! Profissional maravilhosa e ambiente acolhedor.",
        imagem: "assets/img/Feedbacks/Cliente01.avif"
    },
    {
        nome: "Bianca Lima",
        texto: "Meu cílios ficaram perfeitos, exatamente como eu queria!",
        imagem: "assets/img/Feedbacks/Cliente02.avif"
    },
    {
        nome: "Camila Torres",
        texto: "Nunca recebi tantos elogios pelas minhas sobrancelhas. Recomendo de olhos fechados!",
        imagem: "assets/img/Feedbacks/Cliente03.avif"
    },
    {
        nome: "Débora Martins",
        texto: "O resultado superou minhas expectativas. Atendimento atencioso do início ao fim.",
        imagem: "assets/img/Feedbacks/Cliente04.avif"
    },
    {
        nome: "Fernanda Alves",
        texto: "Ambiente impecável e técnica incrível. Me senti muito segura durante todo o procedimento.",
        imagem: "assets/img/Feedbacks/Cliente05.avif"
    },
    {
        nome: "Gabriela Rocha",
        texto: "Saí renovada! O cuidado e o carinho fazem toda a diferença. Voltarei sempre!",
        imagem: "assets/img/Feedbacks/Cliente06.avif"
    },
    {
        nome: "Helena Dias",
        texto: "Profissional detalhista e dedicada. Meus cílios ficaram lindos e super naturais.",
        imagem: "assets/img/Feedbacks/Cliente07.avif"
    },
    {
        nome: "Isabela Ferreira",
        texto: "Experiência maravilhosa! Atendimento humanizado e resultado impecável.",
        imagem: "assets/img/Feedbacks/Cliente08.avif"
    }
];

const wrapper = document.getElementById('swiper-wrapper');

slides.forEach(slide => {
    const div = document.createElement('div');
    div.className = 'swiper-slide';
    div.innerHTML = `
        <div class="card-feedback">
            <div class="header">
                <img src="${slide.imagem}" alt="${slide.nome}">
                <div class="user-info">
                    <strong>@${slide.nome}</strong>
                </div>
            </div>
            <div class="comment">
                <p>"${slide.texto}"</p>
            </div>
        </div>
    `;
    wrapper.appendChild(div);
});

// Carrossel
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // Em telas maiores ou iguais a 768px (tablets)
        768: {
            slidesPerView: 'auto', // Permite mostrar quantos slides couberem
            spaceBetween: 30,
            centeredSlides: true, // Centraliza o slide ativo
        },
        // Em telas maiores ou iguais a 1024px (desktops)
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            centeredSlides: true,
        }
    }
});


// Cursos (adaptados para a estrutura minimalista)
const cursos = [
    {
        titulo: "Desperte seu Olhar de Artista com Extensão de Cílios",
        beneficio: "Inicie sua carreira Lash com o curso para iniciantes!",
        imagem: "assets/img/cursos/cilios.jpg",
        mensagemWhats: "Olá! Quero me inscrever no curso de Lash Iniciante.",
        pdfLink: "/caminho/para/o/pdf-do-curso-1.pdf"
    },
    {
        titulo: "By Perfect Lash: Volume Brasileiro que Conquista",
        beneficio: "Domine a técnica mais desejada e eleve seu nível!",
        imagem: "assets/img/cursos/lash.jpg",
        mensagemWhats: "Olá! Quero saber sobre o curso By Perfect Lash.",
        pdfLink: "/caminho/para/o/pdf-do-curso-2.pdf"
    },
    {
        titulo: "Sobrancelhas Perfeitas: Design, Henna e Geometria",
        beneficio: "Transforme olhares com designs simétricos e lucrativos!",
        imagem: "assets/img/cursos/sobrancelhas.jpg",
        mensagemWhats: "Olá! Tenho interesse no curso de Sobrancelhas.",
        pdfLink: "/caminho/para/o/pdf-do-curso-3.pdf"
    }
];

const lista = document.getElementById("cursos-lista");

function abrirWhatsApp(mensagem) {
    const url = `https://wa.me/5519981559831?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

cursos.forEach(curso => {
    const card = document.createElement("div");
    card.className = "curso-card-minimal";
    card.innerHTML = `
        <div class="curso-card-minimal__conteudo">
            <h3 class="curso-card-minimal__titulo texto-com-gradiente">${curso.titulo}</h3>
            <p class="curso-card-minimal__chamada">${curso.beneficio}</p>
            <p class="curso-card-minimal__incentivo">🔥 Vagas Limitadas! Transforme sua paixão agora!</p>
            <div class="curso-card-minimal__botoes">
                <a href="https://wa.me/5519981559831?text=${encodeURIComponent(curso.mensagemWhats)}" target="_blank" class="curso-card-minimal__cta">Quero me inscrever!</a>
                <a href="${curso.pdfLink}" target="_blank" class="curso-card-minimal__pdf-link"><i class="fas fa-file-pdf"></i> Ver Detalhes</a>
            </div>
        </div>
        <div class="curso-card-minimal__imagem">
            <img src="${curso.imagem}" alt="${curso.titulo}">
        </div>
    `;
    lista.appendChild(card);
});


const servicosSobrancelhas = [
    {
        titulo: "Brow Lamination",
        descricao: "Alinhamento e fixação dos fios para sobrancelhas mais cheias, alinhadas e com efeito natural.",
        caracteristicas: ["Alinhamento duradouro", "Efeito natural", "Fios disciplinados"],
        imagem: "assets/img/servicos/sobrancelhas/BrowLamination.jpg"
    },
    {
        titulo: "Nanobrows",
        descricao: "Técnica avançada de micropigmentação fio a fio para um resultado hiper-realista e delicado.",
        caracteristicas: ["Fio a fio realista", "Naturalidade", "Longa duração"],
        imagem: "assets/img/servicos/sobrancelhas/Nanobrows.jpg"
    },
    {
        titulo: "Design de sobrancelhas personalizado",
        descricao: "Modelagem exclusiva para valorizar o formato do seu rosto, respeitando sua identidade.",
        caracteristicas: ["Personalizado", "Harmônico", "Preciso"],
        imagem: "assets/img/servicos/sobrancelhas/DesignerSobrancelhasPersonalizado.jpg"
    },
    {
        titulo: "Designer com henna",
        descricao: "Coloração temporária para realçar e preencher as sobrancelhas, com design sob medida.",
        caracteristicas: ["Definido", "Coloração temporária", "Preenchimento natural"],
        imagem: "assets/img/servicos/sobrancelhas/DesignerHenna.jpg"
    }
];

const servicosCilios = [
    {
        titulo: "Volume Moana",
        descricao: "Técnica exclusiva que proporciona cílios volumosos, leves e com efeito natural, realçando o olhar sem pesar.",
        caracteristicas: ["Volume leve", "Efeito natural", "Confortável"],
        imagem: "assets/img/servicos/cilios/VolumeMoana.jpg"
    },
    {
        titulo: "Volume Jasmine",
        descricao: "Fios leves aplicados em leques para um olhar mais marcante.",
        caracteristicas: ["Olhar marcante", "Leques leves", "Durabilidade"],
        imagem: "assets/img/servicos/cilios/VolumeJasmine.jpg"
    },
    {
        titulo: "Volume Aurora",
        descricao: "Curvatura natural dos cílios sem extensão.",
        caracteristicas: ["Curvatura natural", "Sem extensão", "Praticidade"],
        imagem: "assets/img/servicos/cilios/VolumeAurora.jpg"
    },
    {
        titulo: "Volume Brasileiro",
        descricao: "Técnica de volume que utiliza leques abertos para um efeito cheio e sofisticado, ideal para quem busca destaque.",
        caracteristicas: ["Volume intenso", "Leques abertos", "Efeito sofisticado"],
        imagem: "assets/img/servicos/cilios/VolumeBrasileiro.jpg"
    },
    {
        titulo: "Lash Lifting",
        descricao: "Procedimento que curva e levanta os cílios naturais, proporcionando um olhar mais aberto e natural sem extensões.",
        caracteristicas: ["Sem extensão", "Curvatura duradoura", "Olhar aberto"],
        imagem: "assets/img/servicos/cilios/LashLifting.jpg"
    },
    {
        titulo: "Fox Eyes",
        descricao: "Técnica que alonga e levanta o canto externo dos olhos, criando um efeito de olhar alongado e sensual.",
        caracteristicas: ["Olhar alongado", "Efeito lifting", "Sensualidade"],
        imagem: "assets/img/servicos/cilios/FoxEyes.jpg"
    }
];

let scrollListenerAplicado = false;

// Renderiza os serviços na tela
function mostrarServicos(tipo) {
    const container = document.getElementById("catalogo-carrossel");
    container.innerHTML = "";

    const servicos = tipo === "sobrancelhas" ? servicosSobrancelhas : servicosCilios;

    // DUPLICAR para simular carrossel infinito
    const servicosDuplicados = [...servicos, ...servicos];

    servicosDuplicados.forEach((servico) => {
        const card = document.createElement("div");
        card.className = "catalogo__card";
        card.setAttribute("role", "group");
        card.setAttribute("aria-label", servico.titulo);

        card.innerHTML = `
            <img src="${servico.imagem}" alt="${servico.titulo}" loading="lazy" onerror="this.src='assets/img/erro-fallback.jpg'">
            <div class="catalogo__card__conteudo">
                <h3 class="catalogo__card__titulo">${servico.titulo}</h3>
                <p class="catalogo__card__descricao">${servico.descricao}</p>
                <div class="catalogo__card__caracteristicas">
                    ${servico.caracteristicas.map(item => `<span>${item}</span>`).join("")}
                </div>
                <div class="catalogo__cta">
                    <a href="#contato">Agendar agora</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll(".catalogo__botao").forEach(botao => {
        botao.classList.remove("ativo");
    });
    document.querySelector(`.catalogo__botao[onclick*="${tipo}"]`).classList.add("ativo");

    aplicarSnapHighlight();
}

function aplicarSnapHighlight() {
    const container = document.getElementById("catalogo-carrossel");

    const destacarCardCentral = () => {
        const cards = container.querySelectorAll(".catalogo__card");
        const center = container.scrollLeft + container.offsetWidth / 2;

        cards.forEach(card => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distancia = Math.abs(center - cardCenter);
            card.classList.toggle("destacado", distancia < card.offsetWidth / 2);
        });
    };

    if (!scrollListenerAplicado) {
        container.addEventListener("scroll", () => {
            window.requestAnimationFrame(destacarCardCentral);
        });
        scrollListenerAplicado = true;
    }

    destacarCardCentral(); // Inicial
}

// Iniciar com sobrancelhas carregado
document.addEventListener("DOMContentLoaded", () => {
    mostrarServicos("sobrancelhas");

    requestAnimationFrame(() => {
        const container = document.getElementById("catalogo-carrossel");
        const primeiroCard = container.querySelector(".catalogo__card");
        if (primeiroCard) {
            container.scrollTo({
                left: primeiroCard.offsetLeft - container.offsetWidth / 2 + primeiroCard.offsetWidth / 2,
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener(
    "scroll",
    debounce(() => {
        const socialBar = document.getElementById("socialBar");

        if (window.scrollY > 100) {
            socialBar.classList.add("visible");
        } else {
            socialBar.classList.remove("visible");
        }
    }, 100)
);

// Função debounce para otimizar o desempenho
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Função Quiz
const listaSobrancelhasQuiz = [
    { id: 'brow_lamination', titulo: "Brow Lamination", descricao: "Alinhamento e fixação...", caracteristicas: ["Alinhamento duradouro", "Efeito natural", "Fios disciplinados"], imagem: 'assets/img/servicos/sobrancelhas/BrowLamination.jpg' },
    { id: 'nanobrows', titulo: "Nanobrows", descricao: "Micropigmentação fio a fio...", caracteristicas: ["Fio a fio realista", "Naturalidade", "Longa duração"], imagem: 'assets/img/servicos/sobrancelhas/Nanobrows.jpg' },
    { id: 'design_sobrancelhas', titulo: "Design personalizado", descricao: "Modelagem exclusiva...", caracteristicas: ["Personalizado", "Harmônico", "Preciso"], imagem: 'assets/img/servicos/sobrancelhas/DesignerSobrancelhasPersonalizado.jpg' },
    { id: 'designer_henna', titulo: "Designer com henna", descricao: "Coloração temporária...", caracteristicas: ["Definido", "Coloração temporária", "Preenchimento natural"], imagem: 'assets/img/servicos/sobrancelhas/DesignerHenna.jpg' }
];

const listaCiliosQuiz = [
    { id: 'volume_moana', titulo: "Volume Moana", descricao: "Cílios volumosos e naturais...", caracteristicas: ["Volume leve", "Efeito natural", "Confortável"], imagem: 'assets/img/servicos/cilios/VolumeMoana.jpg' },
    { id: 'volume_jasmine', titulo: "Volume Jasmine", descricao: "Olhar mais marcante com leques...", caracteristicas: ["Olhar marcante", "Leques leves", "Durabilidade"], imagem: 'assets/img/servicos/cilios/VolumeJasmine.jpg' },
    { id: 'lash_lifting', titulo: "Lash Lifting", descricao: "Curvatura natural sem extensão...", caracteristicas: ["Sem extensão", "Curvatura duradoura", "Olhar aberto"], imagem: 'assets/img/servicos/cilios/LashLifting.jpg' },
    { id: 'fox_eyes', titulo: "Fox Eyes", descricao: "Olhar alongado e sensual...", caracteristicas: ["Olhar alongado", "Efeito lifting", "Sensualidade"], imagem: 'assets/img/servicos/cilios/FoxEyes.jpg' }
];

// Perguntas do quiz
const quizPerguntas = [
    {
        pergunta: "Qual seu objetivo principal?",
        tipo: "unica",
        opcoes: ["Realçar sobrancelhas", "Realçar cílios", "Realçar ambos"],
        pontuacao: {
            "Realçar sobrancelhas": { areas: { sobrancelhas: 1 } },
            "Realçar cílios": { areas: { cilios: 1 } },
            "Realçar ambos": { areas: { sobrancelhas: 1, cilios: 1, ambos: 1 } }
        }
    },
    {
        pergunta: "Para suas sobrancelhas, você prefere um efeito mais natural ou definido?",
        tipo: "unica",
        opcoes: ["Natural", "Definido"],
        pontuacao: {
            "Natural": { brow_lamination: 1, design_sobrancelhas: 0.5 },
            "Definido": { nanobrows: 1, designer_henna: 1 }
        },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Para seus cílios, você busca mais volume ou curvatura e alongamento?",
        tipo: "unica",
        opcoes: ["Volume", "Curvatura/Alongamento"],
        pontuacao: {
            "Volume": { volume_moana: 1, volume_jasmine: 1 },
            "Curvatura/Alongamento": { lash_lifting: 1, fox_eyes: 1 }
        },
        condicao: (respostas) => respostas.areas?.cilios > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Você prefere um procedimento de longa duração para as sobrancelhas?",
        tipo: "unica",
        opcoes: ["Sim", "Não"],
        pontuacao: {
            "Sim": { nanobrows: 1 },
            "Não": { brow_lamination: 0.5, design_sobrancelhas: 0.5, designer_henna: 0.5 }
        },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Você prefere cílios com um toque mais natural?",
        tipo: "unica",
        opcoes: ["Sim", "Não"],
        pontuacao: {
            "Sim": { volume_moana: 1, lash_lifting: 1 },
            "Não": { volume_jasmine: 0.5, fox_eyes: 0.5 }
        },
        condicao: (respostas) => respostas.areas?.cilios > 0 || respostas.areas?.ambos > 0
    }
];

// Elementos do DOM
const quizModal = document.getElementById("quiz-modal");
const quizContainer = document.getElementById("quiz-container");
const perguntaElement = document.getElementById("pergunta");
const opcoesElement = document.getElementById("opcoes");
const resultadoElement = document.getElementById("resultado");
const servicoRecomendadoMsg = document.getElementById("servico-recomendado-msg");
const whatsappLink = document.getElementById("whatsapp-link");
const quizProgresso = document.getElementById("quiz-progresso");

// Verificação crítica de elementos
if (!quizModal || !quizContainer || !perguntaElement || !opcoesElement ||
    !resultadoElement || !servicoRecomendadoMsg || !whatsappLink || !quizProgresso) {
    console.error("Elementos essenciais do quiz não encontrados no DOM!");
}

// Variáveis de estado
let quizAtivo = false;
let perguntaAtualIndex = 0;
const respostasUsuario = { areas: {} };
const pontuacaoSobrancelhas = {};
const pontuacaoCilios = {};

// Inicializar pontuações
listaSobrancelhasQuiz.forEach(servico => pontuacaoSobrancelhas[servico.id] = 0);
listaCiliosQuiz.forEach(servico => pontuacaoCilios[servico.id] = 0);

// Função para abrir o quiz
function abrirQuiz() {
    quizModal.style.display = "flex";
    quizAtivo = true;
    perguntaAtualIndex = 0;

    // Resetar respostas e pontuações
    Object.keys(respostasUsuario).forEach(key => delete respostasUsuario[key]);
    respostasUsuario.areas = {};
    Object.keys(pontuacaoSobrancelhas).forEach(key => pontuacaoSobrancelhas[key] = 0);
    Object.keys(pontuacaoCilios).forEach(key => pontuacaoCilios[key] = 0);

    // Mostrar elementos do quiz e esconder resultado
    quizContainer.style.display = "block";
    resultadoElement.style.display = "none";

    // Forçar uma atualização inicial da barra para 0%
    const barraInterna = quizProgresso.querySelector('div');
    if (barraInterna) {
        barraInterna.style.width = `0%`;
        barraInterna.textContent = `0%`;
    }

    mostrarPergunta();
}

// Função para fechar o quiz
function fecharQuiz() {
    quizModal.style.display = "none";
    quizAtivo = false;
}


function atualizarProgresso() {
    const totalPerguntasVisiveis = quizPerguntas.filter(p => !p.condicao || p.condicao(respostasUsuario)).length;
    // O progresso será baseado em quantas perguntas *foram* respondidas
    const perguntasRespondidas = Object.keys(respostasUsuario).filter(key => key.startsWith('q')).length;
    const progresso = totalPerguntasVisiveis > 0 ? (perguntasRespondidas / totalPerguntasVisiveis) * 100 : 0;

    console.log("--- Atualizar Progresso ---");
    console.log("perguntaAtualIndex:", perguntaAtualIndex);
    console.log("respostasUsuario:", respostasUsuario);
    console.log("Total perguntas visíveis:", totalPerguntasVisiveis);
    console.log("Perguntas respondidas:", perguntasRespondidas);
    console.log("Progresso:", progresso);

    const barraInterna = quizProgresso.querySelector('div');
    if (barraInterna) {
        barraInterna.style.width = `${progresso}%`;
        barraInterna.textContent = `${Math.round(progresso)}%`;
    } else {
        console.log("Elemento div interno da barra de progresso não encontrado!");
    }
}

function abrirQuiz() {
    quizModal.style.display = "flex";
    quizAtivo = true;
    perguntaAtualIndex = 0;

    // Resetar respostas e pontuações
    Object.keys(respostasUsuario).forEach(key => delete respostasUsuario[key]);
    respostasUsuario.areas = {};
    Object.keys(pontuacaoSobrancelhas).forEach(key => pontuacaoSobrancelhas[key] = 0);
    Object.keys(pontuacaoCilios).forEach(key => pontuacaoCilios[key] = 0);

    // Mostrar elementos do quiz e esconder resultado
    quizContainer.style.display = "block";
    resultadoElement.style.display = "none";

    // Atualização inicial da barra para 0%
    const barraInterna = quizProgresso.querySelector('div');
    if (barraInterna) {
        barraInterna.style.width = `0%`;
        barraInterna.textContent = `0%`;
    }

    atualizarProgresso(); // Chamar a atualização imediatamente após resetar

    mostrarPergunta();
}

function mostrarPergunta() {
    atualizarProgresso(); // Atualiza a barra de progresso ao mostrar a pergunta

    // Pular perguntas cujas condições não são atendidas
    while (perguntaAtualIndex < quizPerguntas.length &&
        quizPerguntas[perguntaAtualIndex].condicao &&
        !quizPerguntas[perguntaAtualIndex].condicao(respostasUsuario)) {
        perguntaAtualIndex++;
    }

    // Verificar se terminou o quiz
    if (perguntaAtualIndex >= quizPerguntas.length) {
        mostrarResultado();
        return;
    }

    const perguntaAtual = quizPerguntas[perguntaAtualIndex];
    perguntaElement.textContent = perguntaAtual.pergunta;
    opcoesElement.innerHTML = "";

    perguntaAtual.opcoes.forEach(opcao => {
        const botaoOpcao = document.createElement("button");
        botaoOpcao.textContent = opcao;
        botaoOpcao.addEventListener("click", () => selecionarResposta(opcao, perguntaAtual.pontuacao, botaoOpcao));
        opcoesElement.appendChild(botaoOpcao);
    });
}

function selecionarResposta(resposta, pontuacao, botaoSelecionado) {
    const perguntaAtual = quizPerguntas[perguntaAtualIndex];
    respostasUsuario[`q${perguntaAtualIndex}`] = resposta;

    // Adicionar classe de selecionado ao botão clicado e remover dos outros
    const botoes = opcoesElement.querySelectorAll('button');
    botoes.forEach(botao => {
        if (botao === botaoSelecionado) {
            botao.classList.add('selecionado');
        } else {
            botao.classList.remove('selecionado');
        }
    });

    if (pontuacao && pontuacao[resposta]) {
        Object.keys(pontuacao[resposta]).forEach(key => {
            if (key === 'areas') {
                Object.keys(pontuacao[resposta].areas).forEach(area => {
                    respostasUsuario.areas[area] = (respostasUsuario.areas[area] || 0) + pontuacao[resposta].areas[area];
                });
            } else {
                if (listaSobrancelhasQuiz.some(s => s.id === key)) {
                    pontuacaoSobrancelhas[key] += pontuacao[resposta][key];
                } else if (listaCiliosQuiz.some(s => s.id === key)) {
                    pontuacaoCilios[key] += pontuacao[resposta][key];
                }
            }
        });
    }

    // Atraso para visualização do feedback antes de ir para a próxima pergunta
    setTimeout(() => {
        perguntaAtualIndex++;
        mostrarPergunta();
    }, 300);
}

// Função para mostrar a pergunta atual
function mostrarPergunta() {
    atualizarProgresso(); // Atualiza a barra de progresso ao mostrar a pergunta

    // Pular perguntas cujas condições não são atendidas
    while (perguntaAtualIndex < quizPerguntas.length &&
        quizPerguntas[perguntaAtualIndex].condicao &&
        !quizPerguntas[perguntaAtualIndex].condicao(respostasUsuario)) {
        perguntaAtualIndex++;
    }

    // Verificar se terminou o quiz
    if (perguntaAtualIndex >= quizPerguntas.length) {
        mostrarResultado();
        return;
    }

    const perguntaAtual = quizPerguntas[perguntaAtualIndex];
    perguntaElement.textContent = perguntaAtual.pergunta;
    opcoesElement.innerHTML = "";

    perguntaAtual.opcoes.forEach(opcao => {
        const botaoOpcao = document.createElement("button");
        botaoOpcao.textContent = opcao;
        botaoOpcao.addEventListener("click", () => selecionarResposta(opcao, perguntaAtual.pontuacao, botaoOpcao));
        opcoesElement.appendChild(botaoOpcao);
    });
}

// Função para selecionar uma resposta
function selecionarResposta(resposta, pontuacao, botaoSelecionado) {
    const perguntaAtual = quizPerguntas[perguntaAtualIndex];
    respostasUsuario[`q${perguntaAtualIndex}`] = resposta;

    // Adicionar classe de selecionado ao botão clicado e remover dos outros
    const botoes = opcoesElement.querySelectorAll('button');
    botoes.forEach(botao => {
        if (botao === botaoSelecionado) {
            botao.classList.add('selecionado');
        } else {
            botao.classList.remove('selecionado');
        }
    });

    if (pontuacao && pontuacao[resposta]) {
        Object.keys(pontuacao[resposta]).forEach(key => {
            if (key === 'areas') {
                Object.keys(pontuacao[resposta].areas).forEach(area => {
                    respostasUsuario.areas[area] = (respostasUsuario.areas[area] || 0) + pontuacao[resposta].areas[area];
                });
            } else {
                if (listaSobrancelhasQuiz.some(s => s.id === key)) {
                    pontuacaoSobrancelhas[key] += pontuacao[resposta][key];
                } else if (listaCiliosQuiz.some(s => s.id === key)) {
                    pontuacaoCilios[key] += pontuacao[resposta][key];
                }
            }
        });
    }

    // Atraso para visualização do feedback antes de ir para a próxima pergunta
    setTimeout(() => {
        perguntaAtualIndex++;
        mostrarPergunta();
    }, 300);
}

// Função para recomendar serviços baseado nas respostas
function recomendarServicos() {
    let recomendacaoSobrancelhas = null;
    let maxPontuacaoSobrancelhas = -1;

    for (const id in pontuacaoSobrancelhas) {
        if (pontuacaoSobrancelhas[id] > maxPontuacaoSobrancelhas) {
            maxPontuacaoSobrancelhas = pontuacaoSobrancelhas[id];
            recomendacaoSobrancelhas = listaSobrancelhasQuiz.find(s => s.id === id);
        }
    }

    let recomendacaoCilios = null;
    let maxPontuacaoCilios = -1;

    for (const id in pontuacaoCilios) {
        if (pontuacaoCilios[id] > maxPontuacaoCilios) {
            maxPontuacaoCilios = pontuacaoCilios[id];
            recomendacaoCilios = listaCiliosQuiz.find(s => s.id === id);
        }
    }

    if ((respostasUsuario.areas?.ambos > 0 || (respostasUsuario.areas?.sobrancelhas > 0 && respostasUsuario.areas?.cilios > 0)) &&
        recomendacaoSobrancelhas && recomendacaoCilios) {
        return { sobrancelhas: recomendacaoSobrancelhas, cilios: recomendacaoCilios, tipo: 'combo' };
    } else if (respostasUsuario.areas?.sobrancelhas > 0 && recomendacaoSobrancelhas) {
        return { sobrancelhas: recomendacaoSobrancelhas, tipo: 'sobrancelhas' };
    } else if (respostasUsuario.areas?.cilios > 0 && recomendacaoCilios) {
        return { cilios: recomendacaoCilios, tipo: 'cilios' };
    } else {
        return { mensagem: "Não conseguimos uma recomendação precisa. Entre em contato conosco para uma avaliação personalizada!" };
    }
}

// Função para mostrar o resultado do quiz
function mostrarResultado() {
    quizContainer.style.display = "none";
    resultadoElement.style.display = "block";

    const recomendacao = recomendarServicos();
    let mensagemResultado = "";
    let linkWhatsApp = "https://wa.me/5519981559831?text=";
    let conteudoResultado = '';

    if (recomendacao.tipo === 'combo' && recomendacao.sobrancelhas && recomendacao.cilios) {
        conteudoResultado = `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <h3>Combo Recomendado</h3>
                <div style="display: flex; gap: 2rem; text-align: left;">
                    <div>
                        <img src="${recomendacao.sobrancelhas.imagem}" alt="${recomendacao.sobrancelhas.titulo}" style="max-width: 150px; height: auto; border-radius: 0.5rem; margin-bottom: 0.5rem;">
                        <strong>${recomendacao.sobrancelhas.titulo}</strong>
                    </div>
                    <div>
                        <img src="${recomendacao.cilios.imagem}" alt="${recomendacao.cilios.titulo}" style="max-width: 150px; height: auto; border-radius: 0.5rem; margin-bottom: 0.5rem;">
                        <strong>${recomendacao.cilios.titulo}</strong>
                    </div>
                </div>
            </div>
        `;
        linkWhatsApp += encodeURIComponent(`Olá! Gostaria de agendar o combo de ${recomendacao.sobrancelhas.titulo} + ${recomendacao.cilios.titulo}.`);
    } else if (recomendacao.tipo === 'sobrancelhas' && recomendacao.sobrancelhas) {
        conteudoResultado = `
            <h3>Sobrancelha Ideal</h3>
            <div style="text-align: left;">
                <img src="${recomendacao.sobrancelhas.imagem}" alt="${recomendacao.sobrancelhas.titulo}" style="max-width: 200px; height: auto; border-radius: 0.5rem; margin-bottom: 1rem;">
                <strong>${recomendacao.sobrancelhas.titulo}</strong>
            </div>
        `;
        linkWhatsApp += encodeURIComponent(`Olá! Gostaria de agendar o serviço de ${recomendacao.sobrancelhas.titulo}.`);
    } else if (recomendacao.tipo === 'cilios' && recomendacao.cilios) {
        conteudoResultado = `
            <h3>Cílio Ideal</h3>
            <div style="text-align: left;">
                <img src="${recomendacao.cilios.imagem}" alt="${recomendacao.cilios.titulo}" style="max-width: 200px; height: auto; border-radius: 0.5rem; margin-bottom: 1rem;">
                <strong>${recomendacao.cilios.titulo}</strong>
            </div>
        `;
        linkWhatsApp += encodeURIComponent(`Olá! Gostaria de agendar o serviço de ${recomendacao.cilios.titulo}.`);
    } else {
        conteudoResultado = `<p>${recomendacao.mensagem}</p>`;
        whatsappLink.style.display = "none";
    }

    servicoRecomendadoMsg.innerHTML = conteudoResultado;
    whatsappLink.href = linkWhatsApp;
    whatsappLink.style.display = recomendacao.mensagem ? "none" : "inline-block";
}

// Event listener para abrir o quiz
document.addEventListener('DOMContentLoaded', function() {
    const abrirQuizLink = document.getElementById('abrir-quiz-link');
    if (abrirQuizLink) {
        abrirQuizLink.addEventListener('click', function(event) {
            event.preventDefault();
            abrirQuiz();
        });
    }
});

// Funções para acesso externo (se necessário)
function abrirQuizExterno() {
    abrirQuiz();
}

function fecharQuizExterno() {
    fecharQuiz();
}