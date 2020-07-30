(function () {


    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
    retorne esse CPF limpo (somente os números).
    Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
    eles! Use um console.log para cada CPF.
    - "049-214 3421-1"
    - "210.458.522-05"
    - "735 500 794 - 22"
    - "101.123-131x32"
    */
    console.log('Limpando CPFs:');
    // ?
    function cleanCPF(numeroCPF) {
        return numeroCPF.match(/\d/g).join('')
    }

    var totalCpf = [cleanCPF("049-214 3421-1"), cleanCPF("210.458.522-05"), cleanCPF("735 500 794 - 22"), cleanCPF("101.123-131x32")]

    for (var i = 0; i < totalCpf.length; i++) {
        console.log(totalCpf[i])
    }

    /*
    Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
    Ex.: "999.999.999-99"
    Mostre o resultado no console.
    */
    console.log('\nFormatando CPFs corretamente:');
    // ?

    var regexNum = /(\d{3})(\d{3})(\d{3})(\d{2})/;// ou /(\d\d\d)(\d\d\d)(\d\d\d)(\d\d)/;

    for (var i = 0; i < totalCpf.length; i++) {
        totalCpf[i] = totalCpf[i].replace(regexNum, "$1.$2.$3-$4")
}
    
    /*ou 
    for (var i = 0; i < totalCpf.length; i++) {
            var resultMatch = totalCpf[i].match(regexNum) 
            totalCpf[i] = resultMatch[1] + '.' + resultMatch[2] + '.' + resultMatch[3] + '-' + resultMatch[4]
    }
    */
    
    console.log(totalCpf)
    /*
    Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
    usando o mínimo de caracteres possíveis na regex.
    Para garantir que a regex funciona, teste-a usando o método match. Se houver
    o match, o método retorna um array com os matches. Caso contrário, ele
    retornará null.
    Mostre no console o resultado do match para a frase:
    "Os meses de janeiro, junho e julho começam com a letra j."
    O resultado deve ser:
    ["junho", "julho"]
    */
    console.log('\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":');
    // ?

    var regexMes = /(\j\u\w\w\w)/g // ou /ju(n|l)ho/g 

    console.log("Os meses de janeiro, junho e julho começam com a letra j.".match(regexMes))
    /*
    Crie uma expressão regular que faça o match com a abertura de uma tag
    HTML qualquer.
    Ex.: "<div>", "<section>", "<blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><section><blockquote>Texto <img /></blockquote></section></div>"
    O resultado deve ser:
    ["<div>", "<section>", "<blockquote>"]
    */
    console.log('\nMatch com a abertura de uma tag HTML:');
    // ?
    console.log("<div><section><blockquote>Texto <img /></blockquote></section></div>".match(/<\w{1,}>/g))
    /*
    Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
    com a abertura e fechamento da tag.
    Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
    O resultado deve ser:
    ["<li></li>", "<li></li>", "<span></span>"]
    */
    console.log('\nMatch com tags HTML vazias (abertura e fechamento da tag):');
    // ?
    console.log("<div><ul><li></li><li></li><li><span></span></li></ul></div>".match(/(<\w{1,}>)(<\/\w{1,}>)/g))
    /*
    Vamos complicar um pouco agora :D
    Crie uma expressão regular que faça o match com um texto existente dentro de
    uma tag HTML. O texto deve ser capturado e substituído por:
    'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'
    Use a marcação abaixo para fazer o replace:
    "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
    A marcação deve permanecer como está, somente o texto deve ser substituído.
    No replace, utilize quebras de linha para deixar uma tag por linha.
    O resultado deve ser esse:
    <h1>O texto dentro da tag "h1" é "Título da página"</h1>
    <p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
    <footer>O texto dentro da tag "footer" é "Rodapé"</footer>
    Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
    https://regex101.com/#javascript e verifique se as capturas estão
    corretas, para depois aplicar no código ;)
    */
    console.log('\nFazer replace dos textos das tags:');
    // ?

    var regexTag = /(<(\w+)>)([^<]+)(<\/\w+>)/g
    var texto = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
    var retTags = []

    texto.replace(regexTag, (total, abreTag, nomeTag, conteudo, fechaTag) => { return retTags.push(
        abreTag + ' o texto dentro da tag ' + nomeTag + ' é ' + conteudo + fechaTag
    )})

    console.log(retTags)

})()