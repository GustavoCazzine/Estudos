

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
        imagem: "assets/img/Feedbacks/Cliente03.avif"
    },
    {
        nome: "Bianca Lima",
        texto: "Meu cílios ficaram perfeitos, exatamente como eu queria!",
        imagem: "assets/img/Feedbacks/Cliente03.avif"
    },
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



// Cursos
const cursos = [
    {
        titulo: "Volume Brasileiro",
        descricao: "Aprenda a técnica de volume brasileiro com prática supervisionada.",
        duracao: "6h",
        nivel: "Iniciante",
        certificado: true,
        imagem: "assets/img/Feedbacks/Cliente03.avif",
        mensagemWhats: "Olá! Gostaria de saber mais sobre o curso de Volume Brasileiro. Pode me enviar detalhes?"
    },
    {
        titulo: "Sobrancelhas com Henna",
        descricao: "Curso completo de design facial com aplicação de henna.",
        duracao: "6h",
        nivel: "Iniciante",
        certificado: true,
        imagem: "assets/img/Feedbacks/Cliente03.avif",
        mensagemWhats: "Olá! Tenho interesse no curso de Sobrancelhas com Henna. Pode me passar as informações?"
    },
    {
        titulo: "Fio a Fio",
        descricao: "Curso focado na técnica clássica fio a fio, com teoria e prática.",
        duracao: "10h",
        nivel: "Avançado",
        certificado: true,
        imagem: "assets/img/Feedbacks/Cliente03.avif",
        mensagemWhats: "Oi! Quero saber mais sobre o curso Fio a Fio. Pode me ajudar?"
    }
];

const lista = document.getElementById("cursos-lista");

function abrirWhatsApp(mensagem) {
    const url = `https://wa.me/5519981559831?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

cursos.forEach(curso => {
    const card = document.createElement("div");
    card.className = "curso-card-horizontal";
    card.innerHTML = `
        <div class="curso-card-img">
            <img src="${curso.imagem}" alt="${curso.titulo}">
        </div>
        <div class="curso-card-info">
            <h3 class="texto-com-gradiente">${curso.titulo}</h3>
            <p>${curso.descricao}</p>
            <div class="curso-card-icons">
                <span title="Duração">${curso.duracao}</span>
                <span title="Nível">${curso.nivel}</span>
                <span title="Certificado">${curso.certificado ? "Sim" : "Não"}</span>
            </div>
        </div>
        <button class="curso-card-btn" onclick='abrirWhatsApp("${curso.mensagemWhats}")'>Saiba Mais</button>

    `;
    lista.appendChild(card);
});



const servicosSobrancelhas = [
    {
        titulo: "Design de Sobrancelhas",
        descricao: "Modelagem personalizada para realçar a beleza natural do rosto.",
        caracteristicas: ["Harmônico", "Preciso", "Natural"],
        imagem: "assets/img/Feedbacks/Cliente07.avif"
    },
    {
        titulo: "Sobrancelhas com Henna",
        descricao: "Coloração temporária para destacar e preencher as sobrancelhas.",
        caracteristicas: ["Definido", "Duradouro", "Versátil"],
        imagem: "assets/img/Feedbacks/Cliente07.avif"
    },
    {
        titulo: "Micropigmentação",
        descricao: "Técnica semipermanente para corrigir falhas e definir o formato.",
        caracteristicas: ["Duradouro", "Sofisticado", "Prático"],
        imagem: "assets/img/Feedbacks/Cliente07.avif"
    }
];

const servicosCilios = [
    {
        titulo: "Extensão Fio a Fio",
        descricao: "Cílios aplicados um a um para um efeito delicado e elegante.",
        caracteristicas: ["Elegante", "Natural", "Leve"],
        imagem: "assets/img/Feedbacks/Cliente07.avif"
    },
    {
        titulo: "Volume Russo",
        descricao: "Fios leves aplicados em leques para um olhar mais marcante.",
        caracteristicas: ["Volumoso", "Marcante", "Durável"],
        imagem: "assets/img/Feedbacks/Cliente07.avif"
    },
    {
        titulo: "Lash Lifting",
        descricao: "Curvatura natural dos cílios sem extensão.",
        caracteristicas: ["Curvado", "Natural", "Prático"],
        imagem: "assets/img/Feedbacks/Cliente07.avif"
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
