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

function selecionarOpcao(el, grp) {
    document.querySelectorAll('#' + grp + ' .radio-opt')
            .forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
}

function enviarWhatsApp() {
    const nome      = document.getElementById('nome').value.trim();
    const nasc      = document.getElementById('nascimento').value;
    const telefone  = document.getElementById('telefone').value.trim();
    const cidade    = document.getElementById('cidade').value.trim();
    const mensagem  = document.getElementById('mensagem').value.trim();

    if (!nome || !telefone) {
        alert('Por favor, preencha pelo menos o nome e o WhatsApp.');
        return;
    }

    const texto = `Olá, Dra. Carla!%0A%0A` +
        `*Nome:* ${nome}%0A` +
        (nasc    ? `*Nascimento:* ${nasc}%0A` : '') +
        `*Telefone:* ${telefone}%0A` +
        (cidade  ? `*Cidade:* ${cidade}%0A` : '') +
        (mensagem ? `%0A*Mensagem:* ${mensagem}` : '');

    window.open(`https://wa.me/5514997196040?text=${texto}`, '_blank');
}