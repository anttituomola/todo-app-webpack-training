import { addTodo } from "./addTodo"

let inputEl = document.getElementById('inputEl');
let submitButton = document.getElementById('submitButtonEl');
let renderEl = document.getElementById('renderEl');

submitButton.addEventListener("click", addTodo);