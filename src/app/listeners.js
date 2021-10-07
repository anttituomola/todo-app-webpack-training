import {deleteHandler} from "./deleteHandler"
import {handleCheckbox} from "./handleCheckbox"
import { CalendarHandler } from "./CalendarHandler"

export function listeners() {
    //listen for checkboxes
    let checkboxes = document.querySelectorAll(".todoCheckbox")
    checkboxes.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            handleCheckbox(e)
        })
    })

    //listen for delete icons
    let deleteIcons = document.querySelectorAll(".trashicon")
    deleteIcons.forEach(function (elem) {
        elem.addEventListener("click", function (e) {
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
                        const calendarHandler = new CalendarHandler()
                        calendarHandler.handle(e, date)
                    }
                })
            })
        })
}