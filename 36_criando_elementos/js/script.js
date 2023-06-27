var novoParagrafo = document.createElement("p")

var texto = document.createTextNode("Este é o conteúdo do paragrafo")

novoParagrafo.appendChild(texto)

var body = document.querySelector("body")

body.appendChild(novoParagrafo)

// inserindo na div#container

var container = document.querySelector('#container')

container.appendChild(novoParagrafo)

// criando e inserindo

var novoTitulo = document.querySelector('#div2') //localizo
var titulo3 = document.createElement('h3') //crio a nova tag
titulo3.appendChild(document.createTextNode('Título 3'))//crio o texto dentro da nova tag

novoTitulo.appendChild(titulo3)//coloco a nova tag com o texto no lugar localizado
