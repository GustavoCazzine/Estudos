

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

// Baixar arquivos
document.addEventListener('DOMContentLoaded', function() {
    const downloadLinks = document.querySelectorAll('.download-link');

    downloadLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Evita o comportamento padrão do link (evita navegação)
            event.preventDefault();
            
            // Recupera o caminho do PDF do atributo 'data-pdf' do link
            const pdfPath = link.getAttribute('data-pdf');

            // Criação de um link temporário para o download
            const a = document.createElement('a');
            a.href = pdfPath;  // Define o caminho do arquivo PDF
            a.download = pdfPath.split('/').pop();  // Extrai o nome do arquivo (exemplo: 'documento1.pdf')

            // Simula o clique para iniciar o download
            document.body.appendChild(a); // Adiciona o link ao DOM temporariamente
            a.click();  // Simula o clique para download

            // Remove o link temporário após o clique
            document.body.removeChild(a);
        });
    });
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
            <h3>${curso.titulo}</h3>
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

