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
  const button = document.querySelector('.botao-form');
  const mensagem = document.getElementById('enviado');

  const showSuccessMessage = () => {
    mensagem.innerText = 'Formulário enviado! Em breve entraremos em contato!';
    mensagem.style.display = 'block';
  };

  const addLoading = () => {
    button.innerHTML =
      '<img src="./img/loading_svgrepo.com.png" class="loading">';
  };

  const removeLoading = () => {
    button.innerHTML = 'Enviar';
  };

  const clearFields = () => {
    document.querySelector('input[name=nome]').value = '';
    document.querySelector('input[name=Sobrenome]').value = '';
    document.querySelector('input[name=telefone]').value = '';
    document.querySelector('input[name=email]').value = '';
    document.querySelector('textarea[name=mensagem]').value = '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();
    const nome = document.querySelector('input[name=nome]').value;
    const telefone = document.querySelector('input[name=telefone]').value;
    const email = document.querySelector('input[name=email]').value;
    const Sobrenome = document.querySelector('input[name=Sobrenome]').value;
    const mensagem = document.querySelector('textarea[name=mensagem]').value;

    fetch('https://api.sheetmonkey.io/form/rdauT5a3a8vnsNoBfVyu2a', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        telefone,
        email,
        Sobrenome,
        mensagem,
      }),
    }).then(() => {
      removeLoading();
      clearFields();
      showSuccessMessage();
    });
  };

  document.querySelector('form').addEventListener('submit', handleSubmit);
});

document.addEventListener('DOMContentLoaded', function () {
  // Obtém o elemento do link de login
  var loginLink = document.getElementById('loginLink');

  // Adiciona um ouvinte de clique ao link de login
  loginLink.addEventListener('click', function (event) {
    // Impede o comportamento padrão do link (navegação)
    event.preventDefault();

    // Exibe a mensagem de aviso
    alert(
      'Este recurso ainda não está disponível! Mas não se preocupe, em breve ele estará no ar!',
    );
  });
});
