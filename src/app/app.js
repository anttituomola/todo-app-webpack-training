import { addTodo } from "./addTodo"

export let todos = []

let submitButton = document.getElementById('submitButtonEl');

submitButton.addEventListener("click", () => {addTodo()})

document.getElementById("inputEl").addEventListener("keypress", (e) => {
    if(e.key === "Enter") {addTodo()}
})

document.getElementById("inputEl").focus()