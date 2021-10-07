import {todos} from "./app"
import {render} from "./render"
let controlsEl = document.getElementById("controls")


export function controls() {
    if(todos) {
        controlsEl.innerHTML = `
            <button id="dueDateSort" class="button">Sort by due date</button>
        `
        
        let dueDateSortButton = document.getElementById("dueDateSort")
        
        dueDateSortButton.addEventListener("click", () => {
            console.log("SORT")
              //Sort rendered todos by due date
              todos.sort(function (a, b) {
                return a.dueDate - b.dueDate
            })
            render()
        })
    }
}


