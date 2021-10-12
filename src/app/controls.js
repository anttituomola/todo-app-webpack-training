import { todos } from "./app"
import { render } from "./render"

export class Controls {
    constructor() {
        this.sortButtonDiv = document.getElementById("sortButtonDiv")
        this.filterButtonDiv = document.getElementById("filterButtonDiv")
    }

    atLeastOneDueDataExists() {
        return todos.some((currentTodo) => currentTodo.dueDate !== null)
    }

    renderDueDateControl() {
        if (this.atLeastOneDueDataExists()) {
            this.sortButtonDiv.innerHTML = `<button id="dueDateSort" class="button">Sort by due date</button>`
            let dueDateSortButton = document.getElementById("dueDateSort")
            dueDateSortButton.addEventListener("click", () => {
                //Sort rendered todos by due date
                todos.sort(function (a, b) {
                    return a.dueDate - b.dueDate
                })
                render()
            })
        }
    }


    renderFilterControls() {
        if(todos.some((currentTodo) => {currentTodo.done === true})) {
            console.log("This is still undone")
        } else { console.log("Nothing is selected!")}
    }

    renderAllControls() {
        this.renderDueDateControl()
        this.renderFilterControls();
    }
}