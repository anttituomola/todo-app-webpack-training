import { todos } from "./app"
import { render } from "./render"

export class Controls {
    constructor() {
        this.controlsEl = document.getElementById("controls")
    }

    atLeastOneDueDataExists() {
        return todos.some((currentTodo) => currentTodo.dueDate !== null)
    }

    renderDueDateControl() {
        if (this.atLeastOneDueDataExists()) {
            this.controlsEl.innerHTML = `
                <button id="dueDateSort" class="button">Sort by due date</button>
            `
    
            let dueDateSortButton = document.getElementById("dueDateSort")
            dueDateSortButton.addEventListener("click", () => {
                //Sort rendered todos by due date
                todos.sort(function (a, b) {
                    return a.dueDate - b.dueDate
                })
                render()
                console.log("This is new branch")
            })
        }
    }

    renderAllControls() {
        this.renderDueDateControl()
        this.renderFilterControls();
    }

    renderFilterControls() {
        // todo implement
    }
}

// const controls1 = {
//     atLeastOneDueDataExists: ...,
//     renderDueDateControl: ...
// }
// const controls2 = new Controls()