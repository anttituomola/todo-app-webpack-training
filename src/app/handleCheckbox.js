import {todos} from "./app"
import {render} from "./render"

export function handleCheckbox(e) {
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id === e.target.parentNode.id) {
            todos[i].done = !todos[i].done;
            render()
        }
    }
}