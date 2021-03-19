
function addTodo(){

    const todoList = document.getElementById("parent-list") //llamo a la todolist
    const newTodo = document.getElementById("add-todo").value 
    const newRow = document.createElement("div"); //la llamo newRow
    newRow.innerText = newTodo;
    const removeButton = document.createElement("button");
    removeButton.innerText = "X";
    removeButton.onclick = removeTodo;
    newRow.appendChild(removeButton);
    
    newRow.classList.add("todo-row"); //le añado el estilo

    todoList.appendChild(newRow); 
}

document.getElementById("boton").addEventListener("click", addTodo)

function removeTodo(e){
    console.log(e) //para ver que es e
    e.target.parentElement.remove();

}


