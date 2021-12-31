import { todos } from "./app"
import { Listeners } from "./Listeners"
import {Controls} from "./Controls"

let renderEl = document.getElementById('renderEl');
let inputEl = document.getElementById('inputEl');
let dayjs = require('dayjs')

export class Render {
    render() {
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
        //Listen for everyting
        const listeners = new Listeners()
        listeners.listenForAll()
    
        //Add controls when todos exist
        const controls = new Controls()
        controls.renderAllControls()
    
        //Focus to input field
        document.getElementById("inputEl").focus()
    }

    checkDuplicates() {
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
}