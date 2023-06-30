//adicionando tarefa
function adicionaTarefa(){
    tarefa = document.querySelector('#task-title').value
    if(tarefa){
        criarTarefa(tarefa)
    }
}

//criando a tarefa
function criarTarefa(){
    var lista = document.querySelector('#task-list') //localizo a lista ul
    var elemento = document.querySelector('.template').innerHTML //copio o elemento li que será o template
    var elementoLista = document.createElement('li') // crio o card que receberá a tarefa
    elementoLista.innerHTML = elemento
    lista.appendChild(elementoLista)
}



const botao = document.querySelector('#add-btn')
botao.addEventListener('click', function(e){
   e.preventDefault()
   adicionaTarefa()
})


