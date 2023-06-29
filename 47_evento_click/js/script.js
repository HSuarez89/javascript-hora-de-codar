var btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
    console.log('Clicou')
    this.style.color = 'red'
})


//click afetando outros eventos

var title = document.querySelector('#title')

title.addEventListener('click', function(){
    var subtitle = document.querySelector('.subtitle')
    subtitle.style.display = 'none'
})


// double click

var par = document.querySelector('#paragrafo')
par.addEventListener('dblclick', function(){
    var lista = document.querySelector('#lista')
    lista.style.color = 'purple'
})