function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const telefone = '5521971744076';

  const texto = `Olá! Me chamo ${nome} e gostaria de agendar um serviço de mecânica para meu automóvel. ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
  window.open(url, '_blank');
}
