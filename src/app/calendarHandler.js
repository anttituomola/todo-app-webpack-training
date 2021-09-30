import {todos} from "./app"
var dayjs = require('dayjs')

export function calendarHandler(e) {
    console.log(e.target.parentNode)
    for(let i = 0; i < todos.length; i++) {
        if(e.target.parentNode.id === todos[i].id) {
            console.log(dayjs(todos[i].dueDate).format("DD.MM.YYYY"))
        }
    }
}