let todoList = document.getElementById("todoList");
let URL = "https://dummyjson.com"

// path?query=value
let readAllTodo = async () => {
    await fetch(`${URL}/todos?Limit=100`)
        .then(res => res.json())
        .then(res => {
            console.log('todo list =', res);
        }).catch(err => console.error(err.message))
}

//print data
const printData = (todo) => {
    todo.forEach((item,index) => {
        todoList += `<div class ="card-container">
        <article class="card">
        <div class="card-title">
        <h3> ${item.id} ${item.todo}</h3>
        </div>
        <div class="card-body">
        <p>Status = ${ item.completed ? `<strong class ="success">Completed</strong>` :
        `<strong class="danger">Not Completed</strong>`}</p>
        </div>
        <div class="card-footer'>
        <a href="/update.html?id=${item.id}" class="btn btn-green">Update</a>
        <a class="btn btn-red">Delete</a>
        </div>
        </article>
        </div>`;
    })
}
// anonymous function / self trigger
(function () {
    readAllTodo()
})();