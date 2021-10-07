import { todos } from "./app"
import { listeners } from "./listeners"
import { controls } from "./Controls"

let renderEl = document.getElementById('renderEl');
var dayjs = require('dayjs')
import {Controls} from "./Controls"

export function render() {
    renderEl.innerHTML = ""
    for (let todoData of todos) {
        const conditionalCheckedClass = todoData.done ? 'checkedTask' : ''
        const dueDateExists = todoData.dueDate ? dayjs(todoData.dueDate).format("DD.MM.YYYY") : ""

        renderEl.innerHTML += `
            <div class="todoRow ${conditionalCheckedClass}" id="${todoData.id}">
                <input type="checkbox" class="todoCheckbox" />
                <div class="todoElement">
                    <span class="todoText">${todoData.text}</span>
                    <span>${dueDateExists}</span>
                </div>
                <i class="calendaricon far fa-calendar-alt"></i>
                <i id="${todoData.id}" class="trashicon far fa-trash-alt"></i>
            </div>`
    }
    listeners()
    //controls()
    const controls = new Controls()
    controls.renderAllControls()
    document.getElementById("inputEl").focus()
}