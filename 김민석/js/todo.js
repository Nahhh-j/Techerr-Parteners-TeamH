const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('input');

let toDos = [];

function saveToDos() {
  localStorage.setItem('todos', JSON.stringify(toDos));
}

function DeleteButton(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(NewToDo) {
  const li = document.createElement('li');
  li.id = NewToDo.id;
  const span = document.createElement('span');
  span.innerText = NewToDo.text;
  const button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener('click', DeleteButton);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const NewToDo = todoInput.value;
  const NewTodoobj = {
    text: NewToDo,
    id: Date.now(),
  };
  todoInput.value = '';
  toDos.push(NewTodoobj);
  paintToDo(NewTodoobj);
  saveToDos();
}

todoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem('todos');

if (savedToDos !== null) {
  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo);
}
