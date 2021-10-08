import { deleteHandler } from "./deleteHandler"
import { handleCheckbox } from "./handleCheckbox"
import { CalendarHandler } from "./CalendarHandler"
import {addTodo} from "./addTodo"


export class Listeners {
    constructor() {
        this.checkboxes = document.querySelectorAll(".todoCheckbox")
        this.deleteIcons = document.querySelectorAll(".trashicon")
        this.calendricon = document.querySelectorAll(".calendaricon")
        this.submitButton = document.getElementById('submitButtonEl');
        this.inputEl = document.getElementById("inputEl")

    }

    //Listen for button click
    submitButtonListener() {
        this.submitButton.addEventListener("click", () => {addTodo()})
    }

    //Listen for Enter
    enterListener() {
        this.inputEl.addEventListener("keypress", (e) => {
            if(e.key === "Enter") {addTodo()}
        })
    }

    //listen for checkboxes
    checkboxesListener() {
        this.checkboxes.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                handleCheckbox(e)
            })
        })
    }

    //listen for delete icons
    deleteIconsListener() {
        this.deleteIcons.forEach(function (elem) {
            elem.addEventListener("click", function (e) {
                deleteHandler(e)
            })
        })
    }
    //listen for calendar icons
    calendarIconListener() {
        this.calendricon.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                const picker = datepicker(e.target, {
                    onSelect: (instance, date) => {
                        const calendarHandler = new CalendarHandler()
                        calendarHandler.handle(e, date)
                    }
                })
            })
        })
    }
}