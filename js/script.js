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

function selecionarOpcao(el, grupo) {
    document.querySelectorAll(`input[name="${grupo}"]`).forEach(i => {
        i.closest('.radio-opt').classList.remove('selected');
    });
    el.classList.add('selected');
}

function enviarWhatsApp() {
    const nome      = document.getElementById('nome').value.trim();
    const nasc      = document.getElementById('nascimento').value;
    const telefone  = document.getElementById('telefone').value.trim();
    const cidade    = document.getElementById('cidade').value.trim();
    const cargo     = document.getElementById('cargo').value.trim();
    const mensagem  = document.getElementById('mensagem').value.trim();
    const situacao  = document.querySelector('input[name="situacao"]:checked');

    if (!nome || !telefone) {
        alert('Por favor, preencha pelo menos o nome e o WhatsApp.');
        return;
    }

    const texto = `Olá, Dra. Carla!%0A%0A` +
        `*Nome:* ${nome}%0A` +
        (nasc      ? `*Nascimento:* ${nasc}%0A` : '') +
        `*Telefone:* ${telefone}%0A` +
        (cidade    ? `*Cidade:* ${cidade}%0A` : '') +
        (situacao  ? `*Situação Funcional:* ${situacao.value}%0A` : '') +
        (cargo     ? `*Cargo:* ${cargo}%0A` : '') +
        (mensagem  ? `*Mensagem:* ${mensagem}` : '');

    window.open(`https://wa.me/5514997196040?text=${texto}`, '_blank');
}

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('popupAviso').classList.add('popup-ativo');
    }, 800);
});
function fecharPopup() {
    document.getElementById('popupAviso').classList.remove('popup-ativo');
}
document.getElementById('popupAviso').addEventListener('click', function(e) {
    if (e.target === this) fecharPopup();
});