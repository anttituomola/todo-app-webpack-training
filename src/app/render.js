import { todos } from "./app"
import {deleteHandler} from "./deleteHandler"
import {handleCheckbox} from "./handleCheckbox"
import {calendarHandler} from "./calendarHandler"

let renderEl = document.getElementById('renderEl');
var dayjs = require('dayjs')

export function render() {
    renderEl.innerHTML = ""
    for (let todoData of todos) {
        const conditionalCheckedClass = todoData.done ? 'checkedTask' : '';

        renderEl.innerHTML += `
            <div class="todoRow ${conditionalCheckedClass}" id="${todoData.id}">
                <input type="checkbox" class="todoCheckbox" />
                <div class="todoElement">
                    <span class="todoText">${todoData.text}</span>
                </div>
                <i class="far calendaricon fa-calendar-alt"></i>
                <i id="${todoData.id}" class="trashicon far fa-trash-alt" />
            </div>`
            /* <span class="todoDueDate">${dayjs(todoData.dueDate).format("DD.MM.YYYY")}</span> */
    }
    document.getElementById("inputEl").focus()

    //listen for checkboxes
    let checkboxes = document.querySelectorAll(".todoCheckbox")
    checkboxes.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            handleCheckbox(e)   
        })
    })

    //listen for delete icons
    let deleteIcons = document.querySelectorAll(".trashicon")
    deleteIcons.forEach(function(elem) {
        elem.addEventListener("click", function(e) {
            deleteHandler(e)
        })
    })

    //listen for calendar icons
    document
    .querySelectorAll(".calendaricon")
    .forEach((elem) => {
        elem.addEventListener("click", (e) => {
            calendarHandler(e)
        })
    })
}