(function(doc) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  var ajax = new XMLHttpRequest();
  var $nomeEmpresa = doc.querySelector('[data-js="nomeEmpresa"]')
  var $telefoneEmpresa = doc.querySelector('[data-js="telefoneEmpresa"]')
  var $tabelaCarros = doc.querySelector('[data-js="tabelaCarros"]')

  var HTMLtr = doc.createElement('tr');
  var HTMLtd = doc.createElement('td');

  HTMLtd.textContent='teste'
  HTMLtr.appendChild(HTMLtd);

  HTMLtd = doc.createElement('td');
  HTMLtd.textContent='teste2'
  HTMLtr.appendChild(HTMLtd);

  console.log(HTMLtr)

  $tabelaCarros.appendChild(HTMLtr)


  ajax.open('GET', '/company.json')
  ajax.send();
  ajax.addEventListener('readystatechange', handleStateChange);

  function handleStateChange(){
    if (requisicaoOK()){
      let respostaRequisicao = JSON.parse(ajax.responseText)
      
      $nomeEmpresa.textContent += respostaRequisicao.name
      $telefoneEmpresa.textContent += respostaRequisicao.phone
    }
  }


  function requisicaoOK(){
    return ajax.readyState === 4;
  }
})(document);
