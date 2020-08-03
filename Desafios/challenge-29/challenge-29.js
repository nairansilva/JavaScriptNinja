(function (win, doc) {
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

  function appCarros() {

    var ajax = new XMLHttpRequest();
    var $nomeEmpresa = new DOM('[data-js="nomeEmpresa"]')
    var $telefoneEmpresa = new DOM('[data-js="telefoneEmpresa"]')
    var $imagemCarro = new DOM('[data-js="imagemCarro"]')
    var $marcaModelo = new DOM('[data-js="marcaModelo"]')
    var $ano = new DOM('[data-js="ano"]')
    var $placa = new DOM('[data-js="placa"]')
    var $cod = new DOM('[data-js="cod"]')
    var $enviar = new DOM('[data-js="enviar"]')
    var $tabelaCarros = new DOM('[data-js="tabelaCarros"]')
    
    return {
      init: function () {
        ajax.open('GET', '/company.json')
        ajax.send();
        ajax.addEventListener('readystatechange', handleStateChange);

        function handleStateChange() {
          if (requisicaoOK()) {
            let respostaRequisicao = JSON.parse(ajax.responseText)

            $nomeEmpresa.get()[0].textContent += respostaRequisicao.name
            $telefoneEmpresa.get()[0].textContent += respostaRequisicao.phone
          }
        }

        function requisicaoOK() {
          return ajax.readyState === 4;
        }
      },

      adicionaEventos: function () {
        $enviar.get()[0].addEventListener('click', adicionaCarros, false)

        function adicionaCarros(event) {
          event.preventDefault();
          $tabelaCarros.get()[0].appendChild(adicionaCarro())
          limpaInput()
        }

        function adicionaCarro(){
          let fragment = doc.createDocumentFragment()
          let HTMLtr = {tagTr: doc.createElement('tr')};   
          let tdImagem = doc.createElement('td');
          let imgLinha = doc.createElement('img')

          imgLinha.setAttribute('src', $imagemCarro.get()[0].value)
          tdImagem.appendChild(imgLinha)
          HTMLtr.tagTr.appendChild(imgLinha);

          adicionaLinha(HTMLtr, $marcaModelo.get()[0].value);
          adicionaLinha(HTMLtr, $ano.get()[0].value);
          adicionaLinha(HTMLtr, $placa.get()[0].value);
          adicionaLinha(HTMLtr, $cod.get()[0].value);

          fragment.appendChild(HTMLtr.tagTr)
          return fragment 
        }

        function adicionaLinha(HTMLtr, valorTd){
          let tdCarro = doc.createElement('td');
          
          tdCarro.textContent = valorTd;
          return HTMLtr.tagTr.appendChild(tdCarro);
        }

        function limpaInput(){
          $imagemCarro.get()[0].value = ""
          $marcaModelo.get()[0].value = ""
          $ano.get()[0].value = ""
          $placa.get()[0].value = ""
          $cod.get()[0].value = ""
        }
      }
    }
  }

  var carros = appCarros();
  carros.init();
  carros.adicionaEventos();

})(window, document);
