import { addTodo } from "./addTodo"

export let todos = []

//Listen for button click
let submitButton = document.getElementById('submitButtonEl');
submitButton.addEventListener("click", () => {addTodo()})

//Listen for Enter
document.getElementById("inputEl").addEventListener("keypress", (e) => {
    if(e.key === "Enter") {addTodo()}
})

//Initial focus on input
document.getElementById("inputEl").focus()