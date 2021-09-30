import {todos} from "./app"

export function handleCheckbox(e) {
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id === e.target.parentNode.id) {
            todos[i].done = true;
            let checkedRow = document.getElementById(todos[i].id).getElementsByClassName("todoDueDate")
            console.log(checkedRow)
            checkedRow[0].classList.toggle("checkboxDone")
        }
    }
}