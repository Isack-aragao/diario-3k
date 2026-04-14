document.addEventListener('DOMContentLoaded', () => {
    console.log("Home do 3K carregada com sucesso!");

    // 1. Efeito de Digitação no Subtítulo
    const textoSubtitulo = document.querySelector('.welcome-text p');
    const mensagem = textoSubtitulo.innerHTML;
    textoSubtitulo.innerHTML = '';
    
    let i = 0;
    function digitar() {
        if (i < mensagem.length) {
            textoSubtitulo.innerHTML += mensagem.charAt(i);
            i++;
            setTimeout(digitar, 100);
        }
    }
    
    // Inicia a digitação após um pequeno delay
    setTimeout(digitar, 800);

    // 2. Animação de Entrada (Fade-in)
    const heroImage = document.querySelector('.image-wrapper img');
    const heroTitle = document.querySelector('.welcome-text h1');
    const btnPortal = document.querySelector('.btn-portal');

    // Define opacidade inicial
    [heroImage, heroTitle, btnPortal].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 1s ease-out';
    });

    // Dispara a animação
    setTimeout(() => {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateY(0)';
    }, 300);

    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 600);

    setTimeout(() => {
        btnPortal.style.opacity = '1';
        btnPortal.style.transform = 'translateY(0)';
    }, 1200);
});
