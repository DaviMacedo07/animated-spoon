const localStorageName = 'to-do-list'

function validarTarefaRepetida() {
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let inputValue = document.getElementById('input-new-tarefa').value
    let existencia = values.find(x => x.name == inputValue)
    return !existencia ? false : true
}
function newTask() {
    let input = document.getElementById('input-new-tarefa')
    input.style.border = ''

    if (!input.value) {
        input.style.border = '3px solid red'
        alert('Digite algo para adicionar na sua lista! ')
    } else if (validarTarefaRepetida()) {
        alert('Ja existe uma tarefa com esse nome!')
    }
      else {
        let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")

        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageName, JSON.stringify(values))
        mostrarValores()
    }
    input.value = ''
}    


function mostrarValores() {
    let values = JSON.parse(localStorage.getItem(localStorageName) ||'[]')
    let list =  document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removerItems("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg></button></li>`
    }
}

function removerItems (data) {
    let values = JSON.parse(localStorage.getItem(localStorageName) ||'[]')
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageName, JSON.stringify(values))
    mostrarValores()
}

mostrarValores() 