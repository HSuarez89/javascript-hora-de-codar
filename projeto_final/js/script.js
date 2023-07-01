const botao = document.querySelector('#add-btn')
botao.addEventListener('click', function(e){
   e.preventDefault()
   adicionaTarefa()
})


var indice = 0

//adicionando tarefa
function adicionaTarefa(){
    var tarefaInput = document.querySelector('#task-title')
    var tarefa = tarefaInput.value
    if(tarefa){
        criarTarefa(tarefa)
        tarefaInput.value = ""
    }
}

//criando a tarefa
function criarTarefa(tarefa){
    var lista = document.querySelector('#task-list') //localizo a lista ul
    var elemento = document.querySelector('.template').innerHTML //copio o elemento li que será o template
    var elementoLista = document.createElement('li') // crio o card que receberá a tarefa
    elementoLista.innerHTML = elemento
    lista.appendChild(elementoLista) //
    var num = contarIndice()
    elementoLista.setAttribute('id', 'li'+num)
    var doneBtn = elementoLista.querySelector('.done-btn')
    doneBtn.setAttribute('id', 'dbtn'+num)
    var doneBtnId = doneBtn.id
    var removeBtn = elementoLista.querySelector('.remove-btn')
    removeBtn.setAttribute('id', 'rbtn'+num)
    var removeBtnId = removeBtn.id
    var tarefaFinal = elementoLista.querySelector('span')
    tarefaFinal.innerHTML = tarefa
    doneBtn.addEventListener('click', function(){
        concluirTarefa(doneBtnId)
    })
    removeBtn.addEventListener('click', function(){
        removerTarefa(removeBtnId)
    })
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

//função para concluir a tarefa

function concluirTarefa(doneBtnId){
    var alterar = document.querySelector("#"+doneBtnId)
    var alterarElemento = alterar.parentElement
    alterarElemento.setAttribute('class', 'done')
}

//função para remover tarefa

function removerTarefa(removeBtnId){
    var alterar = document.querySelector('#'+removeBtnId)
    var alterarElemento = alterar.parentElement
    alterarElemento.setAttribute('class', 'hide')
}