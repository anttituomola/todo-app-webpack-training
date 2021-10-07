import { todo } from './todo'
import { todos } from "./app"
var dayjs = require('dayjs')
let inputEl = document.getElementById('inputEl');
import { v4 as uuidv4 } from 'uuid'
import { render } from './render'
import { checkDuplicates } from './checkDuplicates'

export function addTodo() {
  //check if same todo already exists
  if (checkDuplicates()) { 
    inputEl.value = ""
    inputEl.focus()
   } else {
     //add a todo
    if (inputEl.value != "") {
      let todoText = inputEl.value
      let aTodo = new todo(todoText, false, null, uuidv4());
      todos.push(aTodo);
      console.log(todos)
      inputEl.value = ""
      render()
    } else {
      //highlight empty input field
      document.getElementById("inputEl").classList.toggle("missingInput")
      setTimeout(() => { document.getElementById("inputEl").classList.toggle("missingInput") }, 310)
      inputEl.focus()
    }
  }
}

