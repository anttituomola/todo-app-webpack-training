import { addTodo } from "./addTodo"

export let todos = []

let submitButton = document.getElementById('submitButtonEl');

submitButton.addEventListener("click", addTodo);