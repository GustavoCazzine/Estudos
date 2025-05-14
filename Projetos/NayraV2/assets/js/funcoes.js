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
        titulo: "Desperte seu Olhar de Artista com o Curso de Extensão de Cílios",
        beneficio: "Domine a técnica de Lash Clássico e inicie sua carreira com confiança!",
        destaque: "Curso ideal para iniciantes, com prática supervisionada.",
        duracao: "6h",
        nivel: "Iniciante",
        certificado: true,
        imagem: "assets/img/Feedbacks/Cliente03.avif",
        mensagemWhats: "Olá! Gostaria de saber mais sobre o curso de Lash Iniciante.",
        detalhes: {
            mensagemNayra: "Esse curso é o primeiro passo para você transformar seu talento em uma carreira de sucesso. Eu mesma vou te acompanhar e te mostrar como comecei do zero e conquistei meus primeiros resultados.",
            modulos: [
                "Fundamentos da extensão fio a fio",
                "Anatomia dos cílios e biossegurança",
                "Escolha e aplicação correta dos fios",
                "Mapeamento, simetria e colagem precisa",
                "Atendimento ao cliente e fotografia básica"
            ],
            bonus: [
                "Checklist de atendimento profissional",
                "Modelo de ficha de anamnese",
                "Grupo exclusivo de alunas"
            ],
            publico: "Mulheres que querem começar na área da beleza, mesmo sem experiência.",
            porQueNayra: "Sou especialista em cílios com centenas de alunas presenciais e online, focada em te ensinar com empatia, acolhimento e técnica.",
            conclusao: "Esse curso é pra você que deseja começar do zero com segurança, apoio e conteúdo prático. Bora juntas dar o primeiro passo?"
        }
    },
    {
        titulo: "By Perfect Lash – Domine a Técnica Mais Desejada pelas Clientes",
        beneficio: "Aprenda fios perfeitos e conquistadores com o volume brasileiro!",
        destaque: "Ideal para quem já aplicou fios clássicos e quer elevar o nível.",
        duracao: "8h",
        nivel: "Intermediário",
        certificado: true,
        imagem: "assets/img/Feedbacks/Cliente02.avif",
        mensagemWhats: "Olá! Gostaria de saber mais sobre o curso By Perfect Lash.",
        detalhes: {
            mensagemNayra: "Esse curso é meu xodó! Ensinei essa técnica para dezenas de alunas que hoje transformam o olhar das clientes com confiança e precisão.",
            modulos: [
                "Fundamentos do volume brasileiro",
                "Construção e posicionamento de fans",
                "Mapeamento avançado e camadas",
                "Fotografia, atendimento e fidelização",
                "Correções e acabamentos impecáveis"
            ],
            bonus: [
                "Presets de foto profissional para celular",
                "Tabela de mapeamentos exclusivos",
                "Mentoria ao vivo de 1h após o curso"
            ],
            publico: "Profissionais que já aplicam lash clássico e querem dominar o volume brasileiro.",
            porQueNayra: "Domino essa técnica há anos e desenvolvi um método visual, direto e aplicável desde o primeiro modelo real.",
            conclusao: "Esse curso é a virada de chave pra você se destacar com cílios de alto padrão. Pronta pra isso?"
        }
    },
    {
        titulo: "Sobrancelhas Perfeitas – Design, Henna e Geometria Real",
        beneficio: "Crie designs simétricos, harmoniosos e lucrativos!",
        destaque: "Curso completo com prática, design personalizado e uso de henna.",
        duracao: "5h",
        nivel: "Iniciante/Intermediário",
        certificado: true,
        imagem: "assets/img/Feedbacks/Cliente01.avif",
        mensagemWhats: "Olá! Gostaria de saber mais sobre o curso de Sobrancelhas.",
        detalhes: {
            mensagemNayra: "Nada valoriza tanto o rosto quanto sobrancelhas bem feitas. Te ensino o passo a passo para criar um design único para cada rosto.",
            modulos: [
                "Medição com paquímetro e visagismo",
                "Correção com linha e pinça profissional",
                "Colorimetria e aplicação da henna",
                "Geometria e simetria natural",
                "Atendimento e precificação"
            ],
            bonus: [
                "Modelo de ficha de cliente",
                "Tabela de visagismo por formato de rosto",
                "Acesso a aula de sobrancelha masculina"
            ],
            publico: "Iniciantes ou profissionais que querem dominar o design profissional e lucrativo.",
            porQueNayra: "Tenho mais de 7 anos de experiência com sobrancelhas reais e te ensino com empatia e firmeza o que realmente importa.",
            conclusao: "Se você quer viver da beleza e transformar olhares com sobrancelhas únicas, esse curso foi feito pra você."
        }
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
            <p><strong>${curso.beneficio}</strong></p>
            <p>${curso.destaque}</p>
            <div class="curso-card-icons">
                <span title="Duração">⏳ ${curso.duracao}</span>
                <span title="Nível">📈 ${curso.nivel}</span>
                <span title="Certificado">🎓 ${curso.certificado ? "Sim" : "Não"}</span>
            </div>

            <div class="curso-card-extra">
                <p><strong>Mensagem da Nayra:</strong> ${curso.detalhes.mensagemNayra}</p>
                
                <h4>Você vai aprender:</h4>
                <ul>${curso.detalhes.modulos.map(item => `<li>✔️ ${item}</li>`).join("")}</ul>

                <h4>Bônus Exclusivos:</h4>
                <ul>${curso.detalhes.bonus.map(b => `<li>🎁 ${b}</li>`).join("")}</ul>

                <h4>Para quem é o curso?</h4>
                <p>${curso.detalhes.publico}</p>

                <h4>Por que aprender com a Nayra?</h4>
                <p>${curso.detalhes.porQueNayra}</p>

                <p><strong>Conclusão:</strong> ${curso.detalhes.conclusao}</p>

                <a class="curso-cta" href="https://wa.me/5519981559831?text=${encodeURIComponent(curso.mensagemWhats)}" target="_blank">💬 Quero me inscrever via WhatsApp</a>
            </div>

            <button class="curso-toggle-btn">Ver mais +</button>
        </div>
    `;
    lista.appendChild(card);

    const toggleBtn = card.querySelector(".curso-toggle-btn");
    const extraContent = card.querySelector(".curso-card-extra");

    toggleBtn.addEventListener("click", () => {
        const allCards = document.querySelectorAll(".curso-card-horizontal");

        allCards.forEach(outroCard => {
            if (outroCard !== card) {
                outroCard.classList.remove("ativo");
                outroCard.querySelector(".curso-toggle-btn").textContent = "Ver mais +";
            }
        });

        const isOpen = card.classList.contains("ativo");
        card.classList.toggle("ativo");
        toggleBtn.textContent = isOpen ? "Ver mais +" : "Ver menos -";
    });
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
