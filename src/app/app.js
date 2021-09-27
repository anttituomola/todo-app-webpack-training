import { addTodo } from "./addTodo"

export let todos = []

let submitButton = document.getElementById('submitButtonEl');

submitButton.addEventListener("click", () => {
    if (document.getElementById("inputEl").value != "") {
        addTodo()
    }
    else {
        document.getElementById("inputEl").classList.toggle("missingInput")
    }
})