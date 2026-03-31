// Efeito de rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mensagem de boas-vindas no console (opcional)
console.log("Landing Page Dra. Carla Naiana carregada com sucesso.");