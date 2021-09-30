import {todos} from "./app"
import { render } from "./render"

export function deleteHandler(e) {
    let icons = document.querySelectorAll(".trashicon")
   for(let i=0; i<icons.length; i++) {
       if(icons[i].id === e.target.id) {
           e.target.parentNode.classList.add("deletedElement")
           //setTimeout(() => {todos.splice(i, 1)},200)
           todos.splice(i, 1)
           setTimeout(() => render(),300)
       }
   }
}