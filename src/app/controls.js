import { todos } from "./app"
import { render } from "./render"
let controlsEl = document.getElementById("controls")


export function controls() {
    const atLeastOneDueDataExists = todos.some((currentTodo) => currentTodo.dueDate !== null)

    if (atLeastOneDueDataExists) {
        controlsEl.innerHTML = `
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
