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
