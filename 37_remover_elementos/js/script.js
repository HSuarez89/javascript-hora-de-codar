//removendo elemento filho

var container = document.querySelector('body #container') //selecionando o elemento pai
var p = document.querySelector('body #container p')

container.removeChild(p)

//remover o próprio elemento

var subtitle = document.querySelector('body .subtitle')

subtitle.remove()//remove a tag também


