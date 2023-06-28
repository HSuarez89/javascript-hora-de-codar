//criar um elemento
 var el = document.createElement('h3')

 el.classList = 'testando-classe'

 el.appendChild(document.createTextNode('Este é o texto do h3'))

 //selecionar o elemento que deseja trocar

 var title = document.querySelector('body h1')
 
 //selecionar o pai do elemento que vai ser trocado

 var pai = title.parentNode


 //trocar os elementos

 pai.replaceChild(el, title) //recebe primeiro o elemento que entra e depois o elemento que sai


 //exercício por minha conta
 //adicionar o item8 novamente na lista e substituí-lo pelo item9

 var novoItem = document.createElement('li')//criando novo elemento da lista
 novoItem.classList = 'item-exercicio'//atribuição de uma classe para esse novo elemento

 novoItem.appendChild(document.createTextNode('Item8'))//inserção do texto do elemento criado
 var lista = document.querySelector('body #lista2')//localização do elemento pai do elemento criado

 lista.appendChild(novoItem)//inserção do elemento no elemento pai

 var itemCorreto = document.createElement('li')//criação de mais um elemento
 itemCorreto.appendChild(document.createTextNode('Item9'))//inserção do texto no novo elemento

 lista.replaceChild(itemCorreto, novoItem)//substituição do primeiro elemento criado pelo segundo
