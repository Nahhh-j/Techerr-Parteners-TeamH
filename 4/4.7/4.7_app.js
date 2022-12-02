const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault(); //stop
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreeting();
}

function paintGreeting() {
  const username = localStorage.getItem.apply(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//const savedUsername = localStorage.getItem(USERNAME_KEY);
//local storage 확인
console.log(savedUsername);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); //form표시
  loginForm.addEventListener('submit', onLoginSubmit); //wating submit
} else {
  paintGreeting();
}
