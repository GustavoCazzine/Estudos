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

    // Função para mostrar/esconder o botão
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
        } else {
            whatsappButton.classList.remove('visible');
            whatsappButton.classList.add('hidden');
        }
    }

    // Função debounce para evitar chamadas excessivas
    function debounce(func, wait) {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    // Escuta o scroll e chama a função com debounce
    window.addEventListener('scroll', debounce(toggleWhatsAppButton, 100));

    toggleWhatsAppButton(); // Executa uma vez ao carregar
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
        imagem: "assets/img/cursos/sobrancelhas.png",
        mensagemWhats: "Olá! Tenho interesse no curso de Sobrancelhas.",
        pdfLink: "/caminho/para/o/pdf-do-curso-3.pdf"
    }
];

const lista = document.getElementById("cursos-lista");

function abrirWhatsApp(mensagem) {
    const url = `https://wa.me/5519999670165?text=${encodeURIComponent(mensagem)}`;
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
                <a href="https://wa.me/5519999670165?text=${encodeURIComponent(curso.mensagemWhats)}" target="_blank" class="curso-card-minimal__cta">Quero me inscrever!</a>
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
        caracteristicas: ["+ Volume", "Fios alinhados", "Natural"],
        imagem: "assets/img/servicos/sobrancelhas/BrowLamination.png"
    },
    {
        titulo: "Nanobrows",
        descricao: "Técnica avançada de micropigmentação fio a fio para um resultado hiper-realista e delicado.",
        caracteristicas: ["Fio a fio", "Realista", "Duradouro"],
        imagem: "assets/img/servicos/sobrancelhas/NanoBrow.png"
    },
    {
        titulo: "Design personalizado",
        descricao: "Modelagem exclusiva para valorizar o formato do seu rosto, respeitando sua identidade.",
        caracteristicas: ["Exclusivo", "Harmonia", "Preciso"],
        imagem: "assets/img/servicos/sobrancelhas/Personalizado.png"
    },
    {
        titulo: "Designer com henna",
        descricao: "Coloração temporária para realçar e preencher as sobrancelhas, com design sob medida.",
        caracteristicas: ["Definido", "Colorido", "Preenchido"],
        imagem: "assets/img/servicos/sobrancelhas/Henna.png"
    }
];

const servicosCilios = [
    {
        titulo: "Volume Brasileiro",
        descricao: "Técnica de volume que utiliza leques abertos para um efeito cheio e sofisticado, ideal para quem busca destaque.",
        caracteristicas: ["Super volume", "Impacto", "Destaque"],
        imagem: "assets/img/servicos/cilios/VolumeBrasileiro.png"
    },
    {
        titulo: "Lash Lifting",
        descricao: "Procedimento que curva e levanta os cílios naturais, proporcionando um olhar mais aberto e natural sem extensões.",
        caracteristicas: ["Curvado", "Natural", "Sem extensão"],
        imagem: "assets/img/servicos/cilios/LashLifting.png"
    },
    {
        titulo: "Fox Eyes",
        descricao: "Técnica que alonga e levanta o canto externo dos olhos, criando um efeito de olhar alongado e sensual.",
        caracteristicas: ["Olhar felino", "Lifting", "Sensual"],
        imagem: "assets/img/servicos/cilios/FoxEyses.png"
    }
];

let scrollListenerAplicado = false;

// Renderiza os serviços na tela
function mostrarServicos(tipo) {
    const container = document.getElementById("catalogo-carrossel");
    container.innerHTML = "";

    const servicos = tipo === "sobrancelhas" ? servicosSobrancelhas : servicosCilios;

    // DUPLICAR para simular carrossel infinito
    const servicosDuplicados = [...servicos]

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

document.addEventListener("DOMContentLoaded", () => {
    const socialBar = document.getElementById("socialBar");
    const toggleBar = document.getElementById("toggleBar");

    let isVisible = false;

    function updateTogglePosition() {
        if (isVisible) {
            toggleBar.classList.remove("floating");
            toggleBar.classList.add("shifted");
            socialBar.classList.add("visible");
        } else {
            toggleBar.classList.remove("shifted");
            toggleBar.classList.add("floating");
            socialBar.classList.remove("visible");
        }
    }

    toggleBar.addEventListener("click", () => {
        isVisible = !isVisible;
        updateTogglePosition();
    });

    // Inicializa como flutuando
    updateTogglePosition();
});



const listaSobrancelhasQuiz = [
    { id: 'design_sobrancelha', titulo: "Design de Sobrancelha", descricao: "Trabalhamos com o formato natural...", caracteristicas: ["Formato natural", "Desenho único", "Pode ser natural ou marcado"], imagem: 'assets/img/servicos/sobrancelhas/Personalizado.png' },
    { id: 'design_com_henna', titulo: "Design com Henna", descricao: "Ideal para quem tem falhas...", caracteristicas: ["Preenchimento de falhas", "Natural", "Levemente marcado"], imagem: 'assets/img/servicos/sobrancelhas/Henna.png' },
    { id: 'brow_lamination', titulo: "Brow Lamination", descricao: "Alinhamento dos fios por até 8 semanas...", caracteristicas: ["Alinhamento duradouro", "Preenche falhas", "Volume"], imagem: 'assets/img/servicos/sobrancelhas/BrowLamination.png' },
    { id: 'nanobrows', titulo: "NanoBrows", descricao: "Evolução da micropigmentação...", caracteristicas: ["Fios realistas", "Indolor", "Volume", "Correção do formato"], imagem: 'assets/img/servicos/sobrancelhas/NanoBrow.png' }
];

const listaCiliosQuiz = [
    { id: 'lash_lifting', titulo: "Lash Lifting", descricao: "Curvamento dos fios naturais...", caracteristicas: ["Curvamento natural", "Pode tingir", "Hidrata os fios"], imagem: 'assets/img/servicos/cilios/LashLifting.png' },
    { id: 'volume_brasileiro', titulo: "Volume Brasileiro", descricao: "Fios em formato de Y...", caracteristicas: ["Volume", "Preenche 80% a 100% dos fios"], imagem: 'assets/img/servicos/cilios/VolumeBrasileiro.png' },
    { id: 'volume_moana', titulo: "Volume Moana", descricao: "Volume encantador e natural...", caracteristicas: ["Volume", "Naturalidade", "Elegância"], imagem: 'assets/img/servicos/cilios/VolumeMoana.png' },
    { id: 'volume_jasmine', titulo: "Volume Jasmine", descricao: "Volume e olhar encantador...", caracteristicas: ["Volume", "Elegância", "Sofisticação"], imagem: 'assets/img/servicos/cilios/VolumeJasmine.png' },
    { id: 'extensoes_pro', titulo: "Extensões Pro", descricao: "Maior preenchimento e durabilidade...", caracteristicas: ["Preenchimento", "Durabilidade", "Sem manutenção"], imagem: 'assets/img/servicos/cilios/Pro.png' },
    { id: 'fox_eyes', titulo: "Efeito Fox Eyes", descricao: "Alonga e levanta os cílios...", caracteristicas: ["Alongamento", "Lifting", "Sofisticado"], imagem: 'assets/img/servicos/cilios/FoxEyses.png' },
    { id: 'volume_shine', titulo: "Volume Shine", descricao: "Volume luminoso e radiante...", caracteristicas: ["Volume", "Luminoso", "Radiante"], imagem: 'assets/img/servicos/cilios/VolumeShine.png' }
];

// Perguntas do quiz (Você precisará adaptar essas perguntas para cobrir todos os serviços)
const quizPerguntas = [
    {
        pergunta: "Qual área você deseja realçar principalmente?",
        tipo: "unica",
        opcoes: ["Cílios", "Sobrancelhas", "Ambos"],
        pontuacao: {
            "Cílios": { areas: { cilios: 1 } },
            "Sobrancelhas": { areas: { sobrancelhas: 1 } },
            "Ambos": { areas: { sobrancelhas: 1, cilios: 1, ambos: 1 } }
        }
    },
    {
        pergunta: "Qual o efeito de cílios que você mais deseja?",
        tipo: "unica",
        opcoes: ["Cílios curvados e alongados naturalmente", "Cílios com volume e preenchimento", "Um olhar mais exótico e marcante"],
        pontuacao: {
            "Cílios curvados e alongados naturalmente": { lash_lifting: 1, volume_moana: 0.7 },
            "Cílios com volume e preenchimento": { volume_brasileiro: 0.8, volume_jasmine: 0.9, volume_shine: 0.8 },
            "Um olhar mais exótico e marcante": { fox_eyes: 1, extensoes_pro: 0.6 }
        },
        condicao: (respostas) => respostas.areas?.cilios > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Com que frequência você prefere fazer a manutenção dos cílios?",
        tipo: "unica",
        opcoes: ["Prefiro um procedimento sem manutenção", "Estou disposta a fazer manutenção regular", "Prefiro algo de curta duração para eventos"],
        pontuacao: {
            "Prefiro um procedimento sem manutenção": { extensoes_pro: 1 },
            "Estou disposta a fazer manutenção regular": { volume_brasileiro: 0.7, volume_moana: 0.6, volume_jasmine: 0.7, volume_shine: 0.6, lash_lifting: 0.6, fox_eyes: 0.6 },
            "Prefiro algo de curta duração para eventos": { lash_lifting: 0.5}
        },
        condicao: (respostas) => respostas.areas?.cilios > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Qual estilo de cílios você acha mais atraente?",
        tipo: "unica",
        opcoes: ["Cílios discretos e elegantes", "Cílios mais chamativos e volumosos", "Um estilo que levante o olhar"],
        pontuacao: {
            "Cílios discretos e elegantes": { volume_moana: 0.8, lash_lifting: 0.7 },
            "Cílios mais chamativos e volumosos": { volume_brasileiro: 0.7, volume_jasmine: 0.9, volume_shine: 0.8, extensoes_pro: 0.7 },
            "Um estilo que levante o olhar": { fox_eyes: 1 }
        },
        condicao: (respostas) => respostas.areas?.cilios > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Você tem alguma sensibilidade nos olhos ou prefere evitar produtos químicos fortes?",
        tipo: "unica",
        opcoes: ["Sim, tenho sensibilidade", "Não tenho problemas com isso"],
        pontuacao: {
            "Sim, tenho sensibilidade": { lash_lifting: 0.7 },
            "Não tenho problemas com isso": { lash_lifting: 0.6, volume_brasileiro: 0.6, volume_moana: 0.6, volume_jasmine: 0.6, volume_shine: 0.6, fox_eyes: 0.6, extensoes_pro: 0.6 }
        },
        condicao: (respostas) => respostas.areas?.cilios > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Qual a sua prioridade ao escolher um procedimento para cílios?",
        tipo: "unica",
        opcoes: ["Realçar a beleza natural", "Transformar o olhar", "Praticidade e durabilidade"],
        pontuacao: {
            "Realçar a beleza natural": { lash_lifting: 0.9, volume_moana: 0.7 },
            "Transformar o olhar": { volume_brasileiro: 0.7, volume_jasmine: 0.7, volume_shine: 0.7, fox_eyes: 0.6, extensoes_pro: 0.8 },
            "Praticidade e durabilidade": { extensoes_pro: 0.9, lash_lifting: 0.6 }
        },
        condicao: (respostas) => respostas.areas?.cilios > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Qual o formato de sobrancelha que você mais te agrada?",
        tipo: "unica",
        opcoes: ["Natural, seguindo o formato original", "Mais definido e marcado", "Mais volumoso e cheio"],
        pontuacao: {
            "Natural, seguindo o formato original": { design_sobrancelha: 1, brow_lamination: 0.7 },
            "Mais definido e marcado": { design_com_henna: 0.9, nanobrows: 0.8 },
            "Mais volumoso e cheio": { brow_lamination: 0.9 }
        },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Você busca um procedimento de longa duração para as sobrancelhas?",
        tipo: "unica",
        opcoes: ["Sim, quero algo que dure", "Não, prefiro opções temporárias"],
        pontuacao: {
            "Sim, quero algo que dure": { nanobrows: 1 },
            "Não, prefiro opções temporárias": { design_sobrancelha: 0.6, design_com_henna: 0.7, brow_lamination: 0.8 }
        },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Qual a sua maior preocupação com suas sobrancelhas?",
        tipo: "unica",
        opcoes: ["Falhas e assimetrias", "Pouca definição e cor", "Fios desalinhados e sem forma"],
        pontuacao: {
            "Falhas e assimetrias": { nanobrows: 0.9, design_com_henna: 0.7 },
            "Pouca definição e cor": { design_sobrancelha: 0.7, brow_lamination: 0.6 },
            "Fios desalinhados e sem forma": { brow_lamination: 1 }
        },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Qual estilo de sobrancelha você considera ideal para você?",
        tipo: "unica",
        opcoes: ["Sobrancelhas delicadas e sutis", "Sobrancelhas expressivas e marcantes"],
        pontuacao: {
            "Sobrancelhas delicadas e sutis": { design_sobrancelha: 0.8, brow_lamination: 0.6 },
            "Sobrancelhas expressivas e marcantes": { design_com_henna: 0.9, nanobrows: 0.7 }
        },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "O que é mais importante para você em um serviço de sobrancelhas?",
        tipo: "unica",
        opcoes: ["Realçar a beleza natural do rosto", "Corrigir imperfeições e definir o olhar", "Praticidade e facilidade no dia a dia"],
        pontuacao: {
            "Realçar a beleza natural do rosto": { design_sobrancelha: 0.9, brow_lamination: 0.6 },
            "Corrigir imperfeições e definir o olhar": { design_com_henna: 0.8, nanobrows: 0.7 },
            "Praticidade e facilidade no dia a dia": { brow_lamination: 0.8, nanobrows: 0.6 }
        },
        condicao: (respostas) => respostas.areas?.sobrancelhas > 0 || respostas.areas?.ambos > 0
    },
    {
        pergunta: "Ao realçar seu olhar, qual área você considera mais importante?",
        tipo: "unica",
        opcoes: ["Cílios (para expressividade)", "Sobrancelhas (para moldura do rosto)", "Ambas as áreas igualmente"],
        pontuacao: {
            "Cílios (para expressividade)": { lash_lifting: 0.6, volume_brasileiro: 0.5, volume_moana: 0.5, volume_jasmine: 0.5, volume_shine: 0.5, fox_eyes: 0.5, extensoes_pro: 0.5 },
            "Sobrancelhas (para moldura do rosto)": { design_sobrancelha: 0.6, design_com_henna: 0.6, brow_lamination: 0.6, nanobrows: 0.6 },
            "Ambas as áreas igualmente": { lash_lifting: 0.5, volume_brasileiro: 0.5, volume_moana: 0.5, volume_jasmine: 0.5, volume_shine: 0.5, fox_eyes: 0.5, extensoes_pro: 0.5, design_sobrancelha: 0.5, design_com_henna: 0.5, brow_lamination: 0.5, nanobrows: 0.5 }
        },
        condicao: (respostas) => respostas.areas?.ambos > 0
    },
    {
        pergunta: "Você prefere um visual mais natural ou transformador?",
        tipo: "unica",
        opcoes: ["Natural (realçar minha beleza)", "Transformador (mudar meu visual)"],
        pontuacao: {
            "Natural (realçar minha beleza)": { lash_lifting: 0.7, volume_moana: 0.6, design_sobrancelha: 0.7, brow_lamination: 0.6 },
            "Transformador (mudar meu visual)": { volume_brasileiro: 0.6, volume_jasmine: 0.7, volume_shine: 0.6, fox_eyes: 0.7, extensoes_pro: 0.7, design_com_henna: 0.7, nanobrows: 0.7 }
        },
        condicao: (respostas) => respostas.areas?.ambos > 0
    },
    {
        pergunta: "Qual a sua prioridade em um serviço de beleza completo?",
        tipo: "unica",
        opcoes: ["Harmonia entre cílios e sobrancelhas", "Destaque de uma área específica"],
        pontuacao: {
            "Harmonia entre cílios e sobrancelhas": { lash_lifting: 0.5, volume_moana: 0.5, volume_jasmine: 0.5, fox_eyes: 0.5, volume_shine: 0.5, extensoes_pro: 0.5, design_sobrancelha: 0.5, design_com_henna: 0.5, brow_lamination: 0.5, nanobrows: 0.5 },
            "Destaque de uma área específica": { lash_lifting: 0.5, volume_moana: 0.5, volume_jasmine: 0.5, fox_eyes: 0.5, volume_shine: 0.5, extensoes_pro: 0.5, design_sobrancelha: 0.5, design_com_henna: 0.5, brow_lamination: 0.5, nanobrows: 0.5 }
        },
        condicao: (respostas) => respostas.areas?.ambos > 0
    },
    {
        pergunta: "Você busca procedimentos que economizem tempo na sua rotina de beleza?",
        tipo: "unica",
        opcoes: ["Sim, quero praticidade", "Não me importo com a rotina"],
        pontuacao: {
            "Sim, quero praticidade": { extensoes_pro: 0.6, nanobrows: 0.6, brow_lamination: 0.7, lash_lifting: 0.7 },
            "Não me importo com a rotina": { volume_brasileiro: 0.5, volume_moana: 0.5, volume_jasmine: 0.5, volume_shine: 0.5, fox_eyes: 0.5, design_sobrancelha: 0.5, design_com_henna: 0.5 }
        },
            condicao: (respostas) => respostas.areas?.ambos > 0
    },
    {
        pergunta: "Qual a sua expectativa geral ao combinar serviços de cílios e sobrancelhas?",
        tipo: "unica",
        opcoes: ["Um resultado elegante e equilibrado", "Um visual marcante e impactante"],
        pontuacao: {
            "Um resultado elegante e equilibrado": { lash_lifting: 0.6, volume_moana: 0.6, volume_jasmine: 0.6, fox_eyes: 0.6, volume_shine: 0.6, extensoes_pro: 0.6, design_sobrancelha: 0.6, design_com_henna: 0.6, brow_lamination: 0.6, nanobrows: 0.6 },
            "Um visual marcante e impactante": { lash_lifting: 0.5, volume_moana: 0.5, volume_jasmine: 0.5, fox_eyes: 0.5, volume_shine: 0.5, extensoes_pro: 0.5, design_sobrancelha: 0.5, design_com_henna: 0.5, brow_lamination: 0.5, nanobrows: 0.5 }
        },
            condicao: (respostas) => respostas.areas?.ambos > 0
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
    let linkWhatsApp = "https://wa.me/5519999670165?text=";
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