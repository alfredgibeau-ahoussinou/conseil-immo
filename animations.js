document.addEventListener('DOMContentLoaded', () => {
    // Animation pour le titre principal
    anime({
        targets: '.hero h1',
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: 300
    });

    // Animation pour le sous-titre
    anime({
        targets: '.hero p',
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: 600
    });

    // Animation pour le bouton CTA
    anime({
        targets: '.cta-button',
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: 900
    });

    // Animation pour les cartes de service
    anime({
        targets: '.service-card',
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: anime.stagger(200, {start: 300}),
        autoplay: false
    });

    // Déclencher l'animation des cartes de service lors du défilement
    const servicesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: '#services .service-card',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    easing: 'easeOutExpo',
                    duration: 1200,
                    delay: anime.stagger(200)
                });
                servicesObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    servicesObserver.observe(document.querySelector('#services'));
});
