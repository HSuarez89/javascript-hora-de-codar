//criar elemento
var elemento = document.createElement('div')

elemento.classList = 'div-criada'//cria uma classe para o elemento

var container = document.querySelector('body #container')

//inserindo a div criada dentro da div container existente
container.appendChild(elemento)

//insertBefore - insere antes

var elemento2 = document.createElement('div')
elemento2.classList = 'div-before'

container.insertBefore(elemento2, elemento)