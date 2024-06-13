document.addEventListener("DOMContentLoaded", function() {
    // Inicialize AOS (Animate On Scroll)
    AOS.init();
});

// Adicione este código se estiver usando Swiper.js para o carrossel de imagens
document.addEventListener("DOMContentLoaded", function() {
    // Inicialize Swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Animação de carregamento
document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById('loader');
    window.addEventListener('load', function() {
        loader.style.display = 'none';
    });
});
