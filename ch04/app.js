const loginForm = document.querySelector("#login-form")
const logininput = document.querySelector("#login-form input")
const loginButton = loginForm.querySelector("button")
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault()
    // 기본동작을 막는것 예를들어, submit 버튼을 눌렀을때 새로고침되는것
    const username = logininput.value
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, logininput.value)
    paintGreetings(username)
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}else{
    paintGreetings()
}