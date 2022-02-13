    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        let todoList = document.getElementById("todo-list")
        let element = document.createElement("li")
        let text = document.createTextNode(arrayOfTodos[i].title)
        element.appendChild(text)
        todoList.appendChild(element)
    }
}

const filterTodos = () => {
//get the value from DOM and set user ID, then filter through the array and remove it all except the ID that matches//

const todoId = document.getElementById('UserIdIn').value; 
var result = arrayOfTodos.filter(user => user.userId == todoId)
    console.log("userId is:"+todoId);
    console.log(result)

}
function clearTodos(){
    let todoList = document.getElementById("todo-list")
    todoList.innerHTML=""
    }


function setUserId(){

}

function thisID(){
    
}



