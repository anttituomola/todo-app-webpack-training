import {todo} from './todo'
import {todos} from "./app"
var dayjs = require('dayjs')
let inputEl = document.getElementById('inputEl');
import { v4 as uuidv4 } from 'uuid'
import {render} from './render'

export function addTodo() {
    let todoText = inputEl.value
    let aTodo = new todo(todoText, false, dayjs().add(3, "day"), uuidv4());
    todos.push(aTodo);
    console.log(todos)
    inputEl.value = ""
    render()
}