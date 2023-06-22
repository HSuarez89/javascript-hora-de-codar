//legth

var nome = 'Henrique'
console.log(nome.length)

var obj = 'bola'
console.log(obj.length)

//indexOf

console.log(nome[2])

var frase = 'O rato roeu a roupa do rei de roma'
console.log(frase.indexOf('roeu'))

//slice

var roeu = frase.slice(7, 11)
console.log(roeu)
console.log(frase)

//replace

var novaFrase = frase.replace('roeu', 'teste')
console.log(novaFrase)