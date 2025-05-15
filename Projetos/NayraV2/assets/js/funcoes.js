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
    slidesPerView: 1,               // Mostra 1 slide por vez
    spaceBetween: 40,               // Espaço de 40px entre os slides
    loop: true,                     // Permite rotação infinita
    navigation: {
        nextEl: '.swiper-button-next',  // Botão próximo
        prevEl: '.swiper-button-prev',  // Botão anterior
    },
    pagination: {
        el: '.swiper-pagination',       // Elemento da paginação
        clickable: true,                // Permite clicar nos bullets
    },
    autoplay: {
        delay: 3000,                    // Troca de slide a cada 3s
        disableOnInteraction: false,    // Continua mesmo após interação
    },
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
