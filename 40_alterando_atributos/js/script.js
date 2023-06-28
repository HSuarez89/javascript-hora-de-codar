//adicionar atributo

var title = document.querySelector('body #title')

title.setAttribute('class', 'testando-atributo')

var btn = document.querySelector('body #container #btn')
btn.setAttribute('disabled', 'disabled')

var subtitle = document.querySelector('body .subtitle')
subtitle.setAttribute('id', 'titulo2')

//remover atributo

var lista = document.querySelector('#lista')
lista.removeAttribute('id')