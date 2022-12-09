const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
const USERNAME_KEY="username";
const HIDDEN_CLASSNAME="hidden";

function onLoginBtnClick(event){
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username=loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  paintinGreetings(username);
}

function paintinGreetings(username){
  greeting.innerText=`Hello ${username}`;
  greeting.classList.remove("hidden");
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginBtnClick);
}else{
  paintinGreetings(savedUsername);
}


