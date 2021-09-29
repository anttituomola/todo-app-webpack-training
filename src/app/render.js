import { todos } from "./app"
let renderEl = document.getElementById('renderEl');
var dayjs = require('dayjs')

export function render() {
    renderEl.innerHTML = ""
        for (let todoData of todos) {
            renderEl.innerHTML += `<div class="todoElement"><span class="todoText">${todoData.text}</span> <span class="todoDueDate">${dayjs(todoData.dueDate).format("DD.MM.YYYY")}</span></div>`
        }
    document.getElementById("inputEl").focus()
}