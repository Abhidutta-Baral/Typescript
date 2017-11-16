interface Todo{
firstName:string;
lastNmae:string;
}

function showTodo(todo:Todo){
console.log(todo.firstName+''+todo.lastNmae)
}
let myTodo = {firstName:'Abhidatta',lastNmae:'Baral'}
showTodo(myTodo);