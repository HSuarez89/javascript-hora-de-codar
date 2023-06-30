var indice = 0

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
    lista.appendChild(elementoLista) //
    var num = contarIndice()
    elementoLista.setAttribute('id', num)
    console.log(tarefa)
}

//função para contar o índice
function contarIndice(){
    if(indice == 0){
        indice ++
        return 0
    }else {
        indice ++
        return indice - 1
    }
}


const botao = document.querySelector('#add-btn')
botao.addEventListener('click', function(e){
   e.preventDefault()
   adicionaTarefa()
})


