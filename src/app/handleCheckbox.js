import {todos} from "./app"

export function handleCheckbox(e) {
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id === e.target.parentNode.id) {
            todos[i].done = true;
            e.target.parentNode.classList.toggle("checkedTask")
            for(let todo of todos) {
                if(todo.done === true) {
                    //how do I found the corrent element to set class on?
                }
            }
        }
    }
}