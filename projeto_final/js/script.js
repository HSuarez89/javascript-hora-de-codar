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
    elementoLista.innerHTML = elemento //colo o template dentro do card criado
    lista.appendChild(elementoLista) //coloca o card dentro dentro do elemento da lista criado
    var num = contarIndice() //chama a função para dar índice aos elementos
    elementoLista.setAttribute('id', 'li'+num) //atribui um id ao card
    var doneBtn = elementoLista.querySelector('.done-btn') //localiza o botão de concluir a tarefa do card recem criado
    doneBtn.setAttribute('id', 'dbtn'+num) //atribui um id ao botão de concluir tarefa
    var doneBtnId = doneBtn.id //captura o id do botão de concluir tarefa
    var removeBtn = elementoLista.querySelector('.remove-btn') //localiza o botão de remover tarefa
    removeBtn.setAttribute('id', 'rbtn'+num) //atribui um id ao botão de remover tarefa
    var removeBtnId = removeBtn.id //captura o id do botão de emover tarefa em uma variável
    var tarefaFinal = elementoLista.querySelector('span') //localiza a tag do card que vai o texto da tarefa inserida pelo usuário
    tarefaFinal.innerHTML = tarefa //insere o texto digitado pelo usuário, recebido da função adicionaTarefa() na tag span
    doneBtn.addEventListener('click', function(){ //função para concluir a tarefa
        concluirTarefa(doneBtnId)
    })
    removeBtn.addEventListener('click', function(){ //função para remover a tarefa da lista
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
    var alterar = document.querySelector("#"+doneBtnId) //localiza o botão do respectivo card a partir do id recebido
    var alterarElemento = alterar.parentElement //localiza o elemento pai do botão (li)
    alterarElemento.setAttribute('class', 'done') //altera a classe para o card receber o css configurado para tarefa concluída
}

//função para remover tarefa

function removerTarefa(removeBtnId){
    var alterar = document.querySelector('#'+removeBtnId) //localiza o botão do respectivo card a partir do id recebido
    var alterarElemento = alterar.parentElement //localiza o elemento pai do botão (li)
    alterarElemento.setAttribute('class', 'hide') //altera a classe para o card receber o css configurado para esconder o card
}