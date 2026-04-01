// Efeito de rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

 // Efeito de rolagem suave
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function enviarWhatsApp() {
    // Número corrigido conforme sua necessidade (DDI + DDD + Número)
    const telefone = "5514997196040"; 
    
    const nome = document.getElementById('nome').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    if(!nome || !mensagem) {
        alert("Por favor, preencha seu nome e a mensagem.");
        return;
    }
  
    const texto = `Olá, meu nome é *${nome}*.\n` +
                  `Assunto: *${assunto}*\n\n` +
                  `*Mensagem:* ${mensagem}`;
  
    const textoCodificado = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${textoCodificado}`;
  
    window.open(url, '_blank');
}