import { todos } from "./app"
var dayjs = require('dayjs')
import datepicker from 'js-datepicker'
import {render} from "./render"


export function calendarHandler(e) {
    let calendar = datepicker(".calendaricon", {
        onSelect: (instanse, date) => {
            console.log(dayjs(date).format("DD.MM.YYYY"))
            for(let todo of todos) {
                if(todo.id === e.target.parentElement.id) {
                    todo.dueDate = date
                }
            }
            render()
        }
    })
}

