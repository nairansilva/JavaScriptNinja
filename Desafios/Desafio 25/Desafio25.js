(function (doc) {
    'use strict';

    var $input = doc.querySelector('[data-js="input"]')
    var $pesquisando = doc.querySelector('[data-js="pesquisando"]')
    // Meu Próprio DebounceTime
    var timeOutfunction

    $input.addEventListener('input', () =>{
        testePesquisa($input.value);
    }, false)

    function testePesquisa(valorPesquisado) {
        valorPesquisado === '' ? $pesquisando.setAttribute("hidden",true) : $pesquisando.removeAttribute("hidden")
        $pesquisando.innerHTML = "Pesquisando..."
        clearTimeout(timeOutfunction); 
        timeOutfunction = setTimeout(()=>{
            $pesquisando.innerHTML = "Resultado Encontrado: " + valorPesquisado;
        },3000, valorPesquisado);
    }

    

})(document);