import { createStore, getStore } from '../models/store';
import { addToDo } from '../models/toDoListModel';


let dialog
let closeButton
let exitButton
let form

export function addToDoController(todo) {
    dialog = document.querySelector('#create-to-do')
    form = dialog.querySelector('#create-form')
    exitButton = dialog.querySelector('#exit')
    closeButton = dialog.querySelector('#close')
    configUi(todo)
    configureListeners()
    dialog.showModal()
}

function configUi(item) {
    dialog.querySelector('#category').value = category
    dialog.querySelector('#status').value = status
}

function configureListeners() {
    exitButton.addEventListener('click', onCloseDialog)
    closeButton.addEventListener('click', onCloseDialog)
    form.addEventListener('submit', onAddToDoItem)
}

function onAddToDoItem(e) {
    e.preventDefault()
    const todo = e.currentTarget.todo.value.trim()
    const category = e.currentTarget.category.value.trim()
    const status = e.currentTarget.status.value.trim()

    addToDo({
        todo,
        category,
        status,
    })
}

function onCloseDialog(e) {
    dialog.close()
}
