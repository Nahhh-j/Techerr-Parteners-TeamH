const toDoForm = document.getElementById('todo-form'); //todo form의 객체를 반환
const toDoInput = toDoForm.querySelector('input');
//toDoForm객체에서 input을 찾아옴
const toDoList = document.getElementById('todo-list'); //todo-list의 객체를 반환

const TODOS_KEY = 'todos';
//TODOS_KEY = localStorge에 있는 todos = JSON.stringify(toDos)

let toDos = [];
//toDos array는 localStorage에 저장 할 수 없다.

function saveToDos() {
  localStorage.setItem('todos', JSON.stringify(toDos));
  //localStorge에 todos = JSON.stringify(toDos)저장
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id는 string타입
  //배열 toDos =
  saveToDos();
  //target = 클릭된 HTML element
}

function paintToDo(newTodo) {
  const li = document.createElement('li'); //li요소를 만들어서 반환
  li.id = newTodo.id;
  //li요소의 id = 매개변수의 id
  const span = document.createElement('span'); //span요소를 만들어서 반환
  span.innerText = newTodo.text; //매개변수의 text
  const button = document.createElement('button'); //button요소를 만들어서 반환
  button.addEventListener('click', deleteToDo); //button 이벤트 리스너
  button.innerText = '❌';
  li.appendChild(span); //li가 자식으로써 span을 가지게 된다
  li.appendChild(button); //li가 자식으로써 button을 가지게 된다
  console.log(li);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //Date.now를 함께 저장
  paintToDo(newTodoObj); //생성한 함수를 실행
  saveToDos();
  //console.log(newTodo, toDoInput.value);
} //방금 발생한 이벤트를 매개변수로 받아옴

toDoForm.addEventListener('submit', handleToDoSubmit);

/*function sayHello(item) {
  console.log('this is the turn of', item);
}*/

const savedToDos = localStorage.getItem(TODOS_KEY);
//localStorage에 TODOS_KEY를 savedToDos에 저장
console.log(savedToDos);
if (savedToDos !== null) {
  //TODOS_KEY에 값이 있다면
  const parsedToDos = JSON.parse(savedToDos); //
  //parsedToDos.forEach(sayHello);//배열의 각각의 원소에 대해서 반복해서 실행
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo /*(item) => paintToDo(item)*/);
  //-----------------arrow function
}

//toDos != localStorage
