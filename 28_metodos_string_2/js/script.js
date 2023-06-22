// toLowerCase e toUpperCase

var frase = "Essa é a frase que vamos manipular."
console.log(frase.toLowerCase())

var fraseCaixaAlta = frase.toUpperCase()
console.log(fraseCaixaAlta)

//trim

var nome = '                   Henrique Suarez'
var nomeTrim = nome.trim()
console.log(nomeTrim)

//split

console.log(frase.split(" "))

var tags = 'PHP, JavaScript, HTML, CSS'
console.log(tags.split(', '))

//lasIndexOf

var fraseDois = "Eu quero a última palavra teste desta frase de teste"
console.log(fraseDois.indexOf('teste'))
console.log(fraseDois.lastIndexOf('teste'))