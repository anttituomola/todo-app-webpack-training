import {todos} from "./app"
import { render } from "./render"

export function deleteHandler(e) {
    let icons = document.querySelectorAll(".trashicon")
   for(let i=0; i<icons.length; i++) {
       if(icons[i].id === e.target.id) {
           todos.splice(i, 1)
           render()
       }
   }
}