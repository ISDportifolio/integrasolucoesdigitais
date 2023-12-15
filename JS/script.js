// window.onscroll = function () {
//   myFunction();
// };

// var header = document.querySelector('.sticky'); // Selecionar o elemento com a classe 'sticky'
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add('sticky');
//   } else {
//     header.classList.remove('sticky');
//   }
// }

document.addEventListener('DOMContentLoaded', (event) => {
  const botao1 = document.getElementById('botao1');
  const botao2 = document.getElementById('botao2');
  const botao3 = document.getElementById('botao3');
  const texto1 = document.getElementById('text1');
  const texto2 = document.getElementById('text2');
  const texto3 = document.getElementById('text3');

  botao1.addEventListener('click', function () {
    botao1.classList.remove('inactive');
    botao2.classList.add('inactive');
    botao3.classList.add('inactive');
    texto1.style.display = 'list-item';
    texto2.style.display = 'none';
    texto3.style.display = 'none';
  });
  botao2.addEventListener('click', function () {
    botao1.classList.add('inactive');
    botao2.classList.remove('inactive');
    botao3.classList.add('inactive');
    texto1.style.display = 'none';
    texto2.style.display = 'list-item';
    texto3.style.display = 'none';
  });
  botao3.addEventListener('click', function () {
    botao1.classList.add('inactive');
    botao2.classList.add('inactive');
    botao3.classList.remove('inactive');
    texto1.style.display = 'none';
    texto2.style.display = 'none';
    texto3.style.display = 'list-item';
  });

  // function selecionarBotao(botao, texto) {
  //   botao.addEventListener('click', function () {
  //     if (!botao.classList.contains('inactive')) {
  //       [botao1, botao2, botao3].forEach((btn) =>
  //         btn.classList.add('inactive'),
  //       );
  //       botao.classList.remove('inactive');

  //       [texto1, texto2, texto3].forEach((txt) => (txt.style.display = 'none'));
  //       texto.style.display = 'list-item';
  //     }
  //   });
  // }
});

document.addEventListener('DOMContentLoaded', function () {
  const circles = document.querySelectorAll('.circle');

  circles.forEach((circle) => {
    circle.addEventListener('click', function () {
      circles.forEach((c) => {
        if (c !== circle) {
          c.style.transform = 'scale(1)';
          c.querySelector('.circle-description').style.display = 'none';
        }
      });

      circle.style.transform = 'scale(1.1)';
      circle.querySelector('.circle-description').style.display = 'block';
    });
  });
});
