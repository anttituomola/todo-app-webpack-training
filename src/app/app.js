import { Listeners } from "./Listeners"

export let todos = []

let listeners = new Listeners()
listeners.submitButtonListener()
listeners.enterListener()

//Initial focus on input
document.getElementById("inputEl").focus()