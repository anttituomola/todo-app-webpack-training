import { todos } from "./app"
import { Render } from "./Render"
const renderClass = new Render()

export class Handlers {
    //mark todo as done
    handleCheckbox(e) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === e.target.parentNode.id) {
                todos[i].done = !todos[i].done;
                renderClass.render()
            }
        }
    }
    //delete a todo
    deleteHandler(e) {
        let icons = document.querySelectorAll(".trashicon")
        for (let i = 0; i < icons.length; i++) {
            if (icons[i].id === e.target.id) {
                e.target.parentNode.classList.add("deletedElement")
                todos.splice(i, 1)
                setTimeout(() => renderClass.render(), 300)
            }
        }
    }
    //set due date for a todo
    calendarHandler(e, date) {
        for (let todo of todos) {
            if (todo.id == e.target.parentElement.id) {
                todo.dueDate = date
                renderClass.render()
            }
        }

    }
}