
let lista = []

const addTask = () => {
    let task = document.getElementById('nome-tarefa')
    let list = document.getElementById('list')
    let error = document.getElementById("error")
    let elementLi = document.createElement('li')
    let msgError = "O campo ''digite sua tarefa'' é obrigatório..."
    if (task.value === "") {
        error.textContent = msgError
        return
    } else {

        lista.push(task.value)
        error.textContent = ""
    }

    list.appendChild(elementLi)

    lista.map(item => {
        elementLi.textContent = item
        console.log(lista)
    })

    task.value = ''

}