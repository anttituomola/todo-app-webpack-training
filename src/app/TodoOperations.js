import { Todo } from './Todo'
import { todos } from "./app"
import { v4 as uuidv4 } from 'uuid'
import { Render } from './Render'

let inputEl = document.getElementById('inputEl');

export class TodoOperations {
  addTodo() {
    //check if same todo already exists
    const renderClass = new Render()
    if (renderClass.checkDuplicates()) {
      inputEl.value = ""
      inputEl.focus()
    } else {
      //add a todo
      if (inputEl.value != "") {
        let todoText = inputEl.value
        let aTodo = new Todo(todoText, false, null, uuidv4());
        todos.push(aTodo);
        console.log(todos)
        inputEl.value = ""
        renderClass.render()
      } else {
        //highlight empty input field
        document.getElementById("inputEl").classList.toggle("missingInput")
        setTimeout(() => { document.getElementById("inputEl").classList.toggle("missingInput") }, 310)
        inputEl.focus()
      }
    }
  }
}

