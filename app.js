const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const link = document.querySelector('a');

const HIDDEN_CLASSNAME = 'hidden';

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  localStorage.setItem('username,', 'nico');
  // greeting.innerText = 'Hello' + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener('submit', onLoginSubmit);
// link.addEventListener('click', handleLinkClick);

// localStorage 사용법

// localStorage.setItem('username,', 'nico');
// localStorage.getItem('username');
// localStorage.removeItem('username');
