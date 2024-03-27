import { toDoItemTemplate } from '../templates/toDoItemTemplate';
import { subscribe } from '../models/toDoListModel';
import {deleteToDoController} from '../controllers/deleteToDoController';
import {updateToDoController} from '../controllers/updateToDoController';
import {addToDoController} from '../controllers/addToDoController';

let view;
let add;


// const testObject = {
//     uid: 1234,
//     todo: 'Pick up shoes',
//     category: 'work',
//     status: 'pending',
// }

export function toDoListView() {
    view = document.querySelector('#to-do-list')
    view.addEventListener('click', onHandleClick)
    add = document.querySelector('#add')
    add.addEventListener('click', onHandleClick)
    // render()
}

subscribe(render)

function render(data) {
    const div = document.createElement('div')
    const toDoList = document.querySelector('#item-container')
    toDoList.replaceChildren()
    
    data.forEach((item) =>{
        div.prepend(toDoItemTemplate(item))
    })

    toDoList.append(div)
}

function onHandleClick(e) { 
    switch (e.target.id) {
        case 'delete': 
            deleteToDoController(e.target.dataset.uid)
            break
        case 'edit':
            console.log(e.target.dataset.uid)
            updateToDoController(e.target.dataset.uid)
            break
        case 'add':
            addToDoController(e.target.dataset.uid)
            break
        default:
            null
    }
}