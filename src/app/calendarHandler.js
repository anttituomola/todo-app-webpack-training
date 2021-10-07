import { todos } from "./app"
import { render } from "./render"

export class CalendarHandler {
    handle(e, date) {
        for (let todo of todos) {
            if (todo.id == e.target.parentElement.id) {
                todo.dueDate = date
                render()
            }
        }
    }
}