import { todos } from "./app"
import { render } from "./render"

export class Handlers {
    handleCheckbox(e) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === e.target.parentNode.id) {
                todos[i].done = !todos[i].done;
                render()
            }
        }
    }

    deleteHandler(e) {
        let icons = document.querySelectorAll(".trashicon")
        for (let i = 0; i < icons.length; i++) {
            if (icons[i].id === e.target.id) {
                e.target.parentNode.classList.add("deletedElement")
                todos.splice(i, 1)
                setTimeout(() => render(), 300)
            }
        }
    }

    calendarHandler(e, date) {
        for (let todo of todos) {
            if (todo.id == e.target.parentElement.id) {
                todo.dueDate = date
                render()
            }
        }

    }
}