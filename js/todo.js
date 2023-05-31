const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById("todo-list");

let toDos = [];
const ToDoKey = "ToDos";

function saveToDos(){
    localStorage.setItem(ToDoKey, JSON.stringify(toDos));
}

function deleteToDo(event){
    // console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "√";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodoObj.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function checkLoad(item){   #2
//     console.log(item);
// }

const savedToDos = localStorage.getItem(ToDoKey);
// console.log(savedToDos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);

    // parsedToDos.forEach((item) => console.log(item)); #1
    // parsedToDos.forEach(checkLoad);   #2
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
