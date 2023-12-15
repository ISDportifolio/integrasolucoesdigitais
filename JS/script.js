window.onscroll = function () {
  myFunction();
};

var header = document.querySelector('.sticky'); // Selecionar o elemento com a classe 'sticky'
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  const botao1 = document.getElementById('botao1');
  const botao2 = document.getElementById('botao2');
  const botao3 = document.getElementById('botao3');
  const texto1 = document.getElementById('text1');
  const texto2 = document.getElementById('text2');
  const texto3 = document.getElementById('text3');

  function selecionarBotao(botao, texto) {
    botao.addEventListener('click', function () {
      if (!botao.classList.contains('inactive')) {
        [botao1, botao2, botao3].forEach((btn) =>
          btn.classList.add('inactive'),
        );
        botao.classList.remove('inactive');

        [texto1, texto2, texto3].forEach((txt) => (txt.style.display = 'none'));
        texto.style.display = 'list-item';
      }
    });
  }

  selecionarBotao(botao1, texto1);
  selecionarBotao(botao2, texto2);
  selecionarBotao(botao3, texto3);
});
