const loginForm = document.querySelector("#login-form")
const logininput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저 기본 동작을 막는다.
    loginForm.classList.add('hidden'); //form에 hidden 클래스 추가
    const username = loginInput.value;
    localStorage.selItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello &{username}`;
    //''로는 실행불가 백틱을 사용해야 한다. string이랑 변수를 합치는 방법, 변수를 string 안에 포함시키는 방법
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    //show the form
} else {
    paintGreetings(savedUsername);
    //show th greetings
}