import { todos } from "./app"
let renderEl = document.getElementById('renderEl');
var dayjs = require('dayjs')

export function render() {
    renderEl.innerHTML = ""
        for (let todoData of todos) {
            renderEl.innerHTML += `<li class="todoElement">${todoData.text} ${dayjs(todoData.dueDate).format("DD.MM.YYYY")}</li>`
        }
}