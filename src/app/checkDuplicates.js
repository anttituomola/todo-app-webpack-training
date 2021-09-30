import { todos } from "./app"
let inputEl = document.getElementById('inputEl');


export function checkDuplicates() {
    for (let i = 0; i < todos.length; i++) {
        if(inputEl.value == todos[i].text) {
            let nodes = Array.from(document.querySelectorAll(".todoText"))
                .find(el => el.textContent === todos[i].text)
                nodes.parentElement.parentElement.classList.add("duplicateInput")
        }
    }
}