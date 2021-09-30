import { todos } from "./app"
import {deleteHandler} from "./deleteHandler"
import {handleCheckbox} from "./handleCheckbox"

let renderEl = document.getElementById('renderEl');
var dayjs = require('dayjs')

export function render() {
    renderEl.innerHTML = ""
    for (let todoData of todos) {
        renderEl.innerHTML += `
            <div class="todoRow" id="${todoData.id}">
            <input type="checkbox" class="todoCheckbox" />
                <div class="todoElement">
                    <span class="todoText">${todoData.text}</span>
                    <span class="todoDueDate">${dayjs(todoData.dueDate).format("DD.MM.YYYY")}</span>
                </div>
                <i id="${todoData.id}" class="trashicon far fa-trash-alt" />
            </div>`
    }
    document.getElementById("inputEl").focus()

    let checkboxes = document.querySelectorAll(".todoCheckbox")
    checkboxes.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            handleCheckbox(e)   
        })
    })

    let icons = document.querySelectorAll(".trashicon")
    icons.forEach(function(elem) {
        elem.addEventListener("click", function(e) {
            deleteHandler(e)
            console.log(e)
        })
    })
}