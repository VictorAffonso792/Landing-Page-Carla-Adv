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
    const telefone = "5514997196040";

    const nome         = document.getElementById('nome').value.trim();
    const fone         = document.getElementById('telefone').value.trim();
    const cidade       = document.getElementById('cidade').value.trim();
    const estado       = document.getElementById('estado').value;
    const idade        = document.getElementById('idade').value.trim();
    const contribuicao = document.getElementById('contribuicao').value.trim();
    const assunto      = document.getElementById('assunto').value;
    const mensagem     = document.getElementById('mensagem').value.trim();

    const servidor = document.querySelector('input[name="servidor"]:checked');
    const inss     = document.querySelector('input[name="inss"]:checked');
    const origem   = document.querySelector('input[name="origem"]:checked');

    if (!nome || !fone) {
        alert("Por favor, preencha seu nome e WhatsApp.");
        return;
    }

    let texto = `Ola! Vim pelo site e gostaria de atendimento.\n\n`;
    texto += `*Nome:* ${nome}\n`;
    texto += `*WhatsApp:* ${fone}\n`;
    if (cidade || estado) texto += `*Localizacao:* ${[cidade, estado].filter(Boolean).join(' - ')}\n`;
    if (idade)        texto += `*Idade:* ${idade} anos\n`;
    if (contribuicao) texto += `*Tempo de contribuicao:* ${contribuicao} anos\n`;
    texto += `\n*Assunto:* ${assunto}\n`;
    if (servidor) texto += `*Servidor publico:* ${servidor.value}\n`;
    if (inss)     texto += `*Possui beneficio INSS:* ${inss.value}\n`;
    if (mensagem) texto += `\n*Mensagem:*\n${mensagem}\n`;
    if (origem)   texto += `\n*Como nos encontrou:* ${origem.value}`;

    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`, '_blank');
}