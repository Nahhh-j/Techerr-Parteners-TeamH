const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  console.log(toDoInput.value);
  toDoInput.value = '';
  console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
