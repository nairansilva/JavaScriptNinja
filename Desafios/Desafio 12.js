/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?

var person = {name: "Nairan", lastname:"Alves", age:30};

console.log( 'Propriedades de "person":' + Object.keys(person).join(', '));

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
console.log( 'Array de "person":' + Object.keys(person))
/*
Crie um array vazio chamado `books`.
*/
// ?
var books = [];
/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?

books.push({name: 'Livro 1', pages: 100})
books.push({name: 'Livro 2', pages: 500})
books.push({name: 'Livro 3', pages: 20})

console.log( '\nLista de livros: ' );
console.log(books)
/*
Mostre no console todos os livros.
*/
// ?

console.log( '\nLivro que está sendo removido:' + books.pop().name);
/*
Remova o último livro, e mostre-o no console.
*/
// ?

console.log( '\nAgora sobraram somente os livros:');
console.log(books)
/*
Mostre no console os livros restantes.
*/
// ?

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' + JSON.stringify(books));

/*
Mostre os livros nesse formato no console:
*/
// ?

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:');
console.log(JSON.parse(JSON.stringify(books)))

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?


for(var i = 0; i < books.length; i++) {
    for ( prop in books[i]){
        console.log(prop + " : " + books[i][prop]);
    }
}
/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?

var myName = ['N','a','i','r','a','n'];

console.log( '\nMeu nome é:' );


console.log(myName.join(''))
/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:' );
console.log(myName.reverse().join(''))
/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:' );
console.log(myName.sort().join(''))
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?