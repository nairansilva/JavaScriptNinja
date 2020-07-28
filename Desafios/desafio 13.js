/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
var arr = ['1', '2', '3']

console.log('O array em formato de string é:' + arr.toString());
// ?

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
// ?

var sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul']
var sudeste = ['Espírito Santo', 'Minas', 'Rio', 'São Paulo']

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/

var brasil = sul.concat(sudeste)
console.log('\nAlguns Estados do Brasil:' + brasil.toString());
// ?

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/

brasil.unshift(['Acre', 'Amapá', 'Amazonas'])
console.log('\nMais estados adicionados:' + sul.toString());
// ?

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/

var itemRemovido = brasil.splice(0, 1)
console.log('\nEstado removido:' + itemRemovido);
// ?

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
// ?

var newSul = brasil.filter(estado => {
    if (sul.indexOf(estado) >= 0) {
        return estado
    }
}
)
/*
Mostre no console os estados que estão em `newSul`.
*/
console.log('\nEstados do Sul do Brasil:' + newSul.toString());
// ?

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log('\nAlguns Estados do Brasil:' + brasil.toString());
// ?

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
// ?
var nordeste = ['Alagoas', 'Bahia', 'Ceará']
/*
Mostre no console os estados do nordeste.
*/
console.log('\nEstados do Nordeste:' + nordeste.toString());
// ?

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
// ?

var newSudeste = brasil.splice(3, 5);

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
// ?
brasil = brasil.concat(nordeste)
/*
Mostre no console os estados em `newSudeste`.
*/
console.log('\nEstados em newSudeste:' + newSudeste.toString());
// ?

/*
Mostre no console os estados do `brasil`.
*/
console.log('\nAlguns estados do Brasil:') + brasil.toString();
// ?

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
// ?
var newBrasil = []
brasil.forEach((estado, id) => {
    newBrasil.push({ id: id, estado: estado });
})
/*
Mostre o array `newBrasil` no console
*/
console.log('\nnewBrasil:');

console.log(newBrasil)
// ?

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log('\nTodos os estados de `brasil` tem mais de 7 letras?');
// ?
var maior7 = brasil.every(estado => {
    return estado.length > 7
}
)

console.log(maior7)
/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log('\nCeará está incluído em `brasil`?');
// ?

var cearaok = brasil.some(estado => {
    return estado === "Ceará"
})

if (cearaok) {
    console.log("Ceará está incluído!")
} else {
    console.log("Ceará não foi incluído :(")
}

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
// ?

var map = newBrasil.map((estado, id) => {
    return {id:id, estado: estado['estado'] + ' pertence ao Brasil'}
})
/*
Mostre no console o array criado acima:
*/
console.log('\nnewBrasil agora com mais informações:');
// ?
console.log(map)
/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
// ?

/*
Mostre o array filtrado acima no console.
*/
var idPar = map.filter(map => {
    if (map.id % 2 === 0 ){
        return map.id
    } 
})

console.log('\nEstados com ID par:');

console.log(idPar)
// ?