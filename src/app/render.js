import { todos } from "./app"
import {deleteHandler} from "./deleteHandler"
import {handleCheckbox} from "./handleCheckbox"
import {calendarHandler} from "./calendarHandler"

let renderEl = document.getElementById('renderEl');
var dayjs = require('dayjs')

export function render() {
    //Sort rendered todos by due date
    todos.sort(function (a, b) {
        return dayjs(a.dueDate) - dayjs(b.dueDate);
    });
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
            const picker = datepicker(e.target, {
                onSelect: (instance, date) => {
                    calendarHandler(e, date)
                }
            })
        })
    })
}