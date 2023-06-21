var nome = null
var sobrenome

console.log(nome)
console.log(sobrenome)

nome = 'Henrique'
sobrenome = 'Suarez'

console.log(nome)
console.log(sobrenome)

console.log(numero) /*Undefined. Propriedade de Hoisting (içamento)
                    Ele recebe a variavel no momento em que o código
                    roda, mas ela vem como Undefined pois ela só é declarada
                    posteriormente.*/

var numero = 5

console.log(numero)