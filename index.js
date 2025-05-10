let lista = []

const addTask = () => {

    let task = document.getElementById('nome-tarefa')
    let error = document.getElementById("error")
  
    if (task.value == "") {
        error.textContent =  "O campo ''digite sua tarefa'' é obrigatório..."
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
        let div = document.createElement("div")

        li_1.textContent = lista[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.classList = "botao-remover"
        botaoRemover.textContent = "Remover"
        li_1.appendChild(botaoRemover)
        botaoRemover.onclick = () => removeTask(i)

        let botaoEditar = document.createElement("button")

        botaoEditar.classList = "botao-editar"
        botaoEditar.textContent = 'Editar'
        botaoEditar.onclick = () => editTask(i)

        let botaoLimpar = document.getElementById("clear")
        botaoLimpar.onclick = () => cleartasks()


        list.appendChild(li_1)
        li_1.appendChild(botaoEditar)

        li_1.appendChild(div)
        div.appendChild(botaoEditar)
        div.appendChild(botaoRemover)

        div.classList = 'container-botao'
    }

}

const removeTask = (id) => {

    lista.splice(id, 1)
    renderTask()
}

const editTask = (id) => {
    let error = document.getElementById("error")

    let editando = prompt('Editando tarefa ... ')

    if (editando === "") {
        error.textContent = "Não é possivel editar o campo vazio ..."


    } else {
        lista[id] = editando
        error.textContent = ""
        renderTask()
    }
}

const cleartasks = () => {
    lista.length = 0
    renderTask()
}


















