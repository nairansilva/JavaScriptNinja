(function (doc) {
  'use strict';
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
  var $cep = doc.querySelector('[data-js="cep"]');
  var $logradouro = doc.querySelector('[data-js="logradouro"]');
  var $bairro = doc.querySelector('[data-js="bairro"]');
  var $cidade = doc.querySelector('[data-js="cidade"]');
  var $buscarDados = doc.querySelector('[data-js="buscarDados"]');
  var $mensagem = doc.querySelector('[data-js="mensagem"]');
  var ajax = new XMLHttpRequest();

  $buscarDados.addEventListener('click', (event) => {
    var regex = /(\D+)/g;

    $mensagem.removeAttribute("hidden")
    event.preventDefault();
    ajax.open('GET', `https://ws.apicep.com/cep.json?code=13211100`) //independente do CEP, o retorno é 500...
    ajax.send();
    ajax.addEventListener('readystatechange', handleStateChange);
  }, false)

  function handleStateChange() {
    if (isRequestOk()) {
      if (ajax.status === 200)
        $mensagem.innerHTML = "Dados Encontrados com Sucesso";
      else
        $mensagem.innerHTML = "Erro ao consultar o CEP. Código do erro: " + ajax.status;
    }
  }

  function isRequestOk() {
    console.log(ajax.readyState)
    return ajax.readyState === 4;
  }

})(document)
