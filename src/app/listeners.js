import { TodoOperations } from "./TodoOperations"
import { Handlers } from "./Handlers"


export class Listeners {
    constructor() {
        this.checkboxes = document.querySelectorAll(".todoCheckbox")
        this.deleteIcons = document.querySelectorAll(".trashicon")
        this.calendricon = document.querySelectorAll(".calendaricon")
        this.submitButton = document.getElementById('submitButtonEl');
        this.inputEl = document.getElementById("inputEl")
        this.handlers = new Handlers()
        this.TodoOperations = new TodoOperations()
    }

    //Listen for button click
    submitButtonListener() {
        this.submitButton.addEventListener("click", this.TodoOperations.addTodo)
    }

    //Listen for Enter
    enterListener() {
        this.inputEl.addEventListener("keypress", (e) => {
            if(e.key === "Enter") {this.TodoOperations.addTodo()}
        })
    }

    //listen for checkboxes
    checkboxesListener() {
        this.checkboxes.forEach((elem) => {
            elem.addEventListener("click", this.handlers.handleCheckbox)
        })
    }

    //listen for delete icons
    deleteIconsListener() {
        this.deleteIcons.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                this.handlers.deleteHandler(e)
            })
        })
    }

    //listen for calendar icons
    calendarIconListener() {
        this.calendricon.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                const picker = datepicker(e.target, {
                    onSelect: (instance, date) => {
                        this.handlers.calendarHandler(e, date)
                    }
                })
            })
        })
    }

    //listen for all
    listenForAll() {
        this.checkboxesListener()
        this.deleteIconsListener()
        this.calendarIconListener()
    }
}