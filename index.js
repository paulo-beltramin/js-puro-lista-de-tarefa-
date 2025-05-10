let lista = []

const addTask = () => {

    let task = document.getElementById('nome-tarefa')
    let error = document.getElementById("error")
    let msgError = "O campo ''digite sua tarefa'' é obrigatório..."



    if (task.value == "") {
        error.textContent = msgError
        return
    } else {
        lista.push(task.value)
        renderTask()
        error.textContent = ""
    }

    task.value = ""

}

const renderTask = () => {
    let list = document.getElementById("list")
    list.innerHTML = ""

    for (let i = 0; i < lista.length; i++) {
        let li_1 = document.createElement('li')

        li_1.textContent = lista[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.classList = "botao-remover"
        botaoRemover.textContent = "Remover"
        li_1.appendChild(botaoRemover)
        botaoRemover.onclick = () => removeTask(i)

        let botaoEditar = document.createElement("button")
        
        botaoEditar.classList = "botao-editar"
        botaoEditar.textContent = 'Editar'
        li_1.appendChild(botaoEditar)
        botaoEditar.onclick = () => editTask(i)

        let botaoLimpar = document.createElement("button")
        botaoLimpar.classList = "botao-limpar"
        botaoLimpar.textContent = 'Limpar tarefas'
        li_1.appendChild(botaoLimpar)
        botaoLimpar.onclick = () => cleartasks(i)


        list.appendChild(li_1)
    }

}

const removeTask = (i) => {

    lista.splice(i, 1)
    renderTask()
}

const editTask = (id) => {
    let editando = prompt('edite a tarefa')

    if (editando !== " ") {
        lista[id] = editando
        renderTask()
    }
}

const cleartasks = () => {
    lista.length = 0
    renderTask()
}


















