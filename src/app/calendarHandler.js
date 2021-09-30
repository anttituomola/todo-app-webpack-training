import { todos } from "./app"
var dayjs = require('dayjs')
import Litepicker from 'litepicker';

export function calendarHandler(e) {
    console.log(e.target.parentNode)
    for (let i = 0; i < todos.length; i++) {
        if (e.target.parentNode.id === todos[i].id) {
            let newDuedate = new Litepicker({
                element: document.getElementsByClassName("calendaricon")
            })
        }
    }
}