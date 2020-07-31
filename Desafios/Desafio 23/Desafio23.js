(function (doc) {

    /* 
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:
    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;
    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    var $visor = doc.querySelector('[data-js="visor"]');
    var $botoesCalculadora = doc.querySelectorAll('[data-js="buttonNumeros"]');
    var $botoesOperadores = doc.querySelectorAll('[data-js="buttonOperadores"]');
    var $buttonZerar = doc.querySelector('[data-js="buttonZerar"]');
    var $buttonIgual = doc.querySelector('[data-js="buttonIgual"]');

    (function defineClicks(){
        $botoesCalculadora.forEach((botaoSelecionado) =>{
            botaoSelecionado.addEventListener(('click'), () => {validaDigito(botaoSelecionado.value)},false)
        })
    
        $botoesOperadores.forEach((botaoSelecionado) =>{
            botaoSelecionado.addEventListener(('click'), () => {
                validaDigito(botaoSelecionado.value)
            },false)
        })
    
        $buttonZerar.addEventListener(('click'), () => { $visor.value = 0}, false)
    
        $buttonIgual.addEventListener(('click'), ()=>{
            defineOperacao('*');
            defineOperacao('/');
            defineOperacao('+');
            defineOperacao('-');
        },false);        
    })()

    function validaDigito(valorDoBotao){
        var regexOperadores = /[*\-+\/]$/g
        var digitoOperador = regexOperadores.test(valorDoBotao)
        var operadorNoFinal = regexOperadores.test($visor.value)

        if ((!operadorNoFinal || (operadorNoFinal && !digitoOperador)) && ($visor.value !== '0'))
            adicionaDadosNoVisor(valorDoBotao);
        else {
            removeUltimoDigitoNoVisor()
            adicionaDadosNoVisor(valorDoBotao);   
        }
    }

    function adicionaDadosNoVisor(valorDoBotao){
        $visor.value += valorDoBotao;
    }

    function removeUltimoDigitoNoVisor(){
        $visor.value = $visor.value.substring(0, $visor.value.length-1);
    }

    function defineOperacao(operador){
        var regex = new RegExp('((\\d+)\\' + operador + '(\\d+))','g') ///((\d+)\operador(\d+))/g
        var operacoes = $visor.value.match(regex)
        var resultado = 0
        var indiceOperador = 0

        while( $visor.value.match(regex) !== null){
            operacoes = $visor.value.match(regex)[0]
            indiceOperador = operacoes.indexOf(operador)
            resultado = realizaCalculo(operacoes.substring(0,indiceOperador), operacoes.substring(indiceOperador + 1, operacoes.length), operador)  
            $visor.value = $visor.value.replace(operacoes, resultado)
        }
    }

    function realizaCalculo(numero1, numero2, operador){
        if (operador === '*')
            return Number(numero1) * Number(numero2)
        if (operador === '/')
            return parseInt(Number(numero1) / Number(numero2))
        if (operador === '-')
            return Number(numero1) - Number(numero2)
        if (operador === '+')
            return Number(numero1) + Number(numero2)
    }

})(document)
