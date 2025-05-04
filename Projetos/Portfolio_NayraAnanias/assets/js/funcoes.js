// Transição entre slides
document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    const minWidthForContentScroll = 1024;

    function handleScroll(element) {
        var courses = document.querySelectorAll('.course');
        courses.forEach(function(course) {
            var rect = course.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                course.classList.add('visible');
            }
        });
    }

    function addScrollListener() {
        if (window.innerWidth >= minWidthForContentScroll) {
            // Para telas de desktop, escuta o scroll no conteúdo específico
            content.addEventListener('scroll', function() {
                handleScroll(content);
            });
            // Remove listener de scroll global, se existir
            window.removeEventListener('scroll', function() {
                handleScroll(window);
            });
        } else {
            // Para telas menores, escuta o scroll global
            window.addEventListener('scroll', function() {
                handleScroll(window);
            });
            // Remove listener de scroll no conteúdo, se existir
            content.removeEventListener('scroll', function() {
                handleScroll(content);
            });
        }
    }

    // Adiciona listener inicialmente
    addScrollListener();

    // Adicionar event listener para redimensionamento da tela
    window.addEventListener('resize', addScrollListener);
});

//Botão do WhatsApp
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

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

// Carrossel
const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Exibe apenas 1 slide por vez
    spaceBetween: 40, // Espaço entre os slides
    loop: true, // Faz o carrossel continuar indefinidamente
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },  
    autoplay: {
        delay: 3000, // Tempo em milissegundos (5 segundos)
        disableOnInteraction: false, // Continua mesmo após interação do usuário
    },
});

// Barra Lateral de RedesSociais

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
