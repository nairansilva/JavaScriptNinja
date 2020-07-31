
/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele; ok 
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero). ok
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset; ok
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.
Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
// ?

(function (doc) {
    'use strict';
    
    var timeOutId
    var contador = 0;
    var $inputCronometro = doc.querySelector('[data-js="inputCronometro"]')
    var $buttonIniciar = doc.querySelector('[data-js="buttonIniciar"]')
    var $buttonPausar = doc.querySelector('[data-js="buttonPausar"]')
    var $buttonResete = doc.querySelector('[data-js="buttonResete"]')

    function timer(){
        contador++;
        $inputCronometro.value = contador; 
        timeOutId = setTimeout(timer, 1000);
    }

    $buttonIniciar.addEventListener('click',function( ){
        timer();
    })

    $buttonPausar.addEventListener('click',function( ){
        clearTimeout(timeOutId);
    })

    $buttonResete.addEventListener('click',function( ){
        clearTimeout(timeOutId);
        contador = 0
        $inputCronometro.value = 0;
    })


})(document)
