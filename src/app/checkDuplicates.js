import { todos } from "./app"
let inputEl = document.getElementById('inputEl');

export function checkDuplicates() {
    for (let i = 0; i < todos.length; i++) {
        if(inputEl.value.toLowerCase() == todos[i].text.toLowerCase()) {
            let nodes = Array.from(document.querySelectorAll(".todoText"))
                .find(el => el.textContent === todos[i].text)
                nodes.parentElement.parentElement.classList.toggle("duplicateInput")
                setTimeout(() => nodes.parentElement.parentElement.classList.remove("duplicateInput"),1000)
                return true
        }
    }
}