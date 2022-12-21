const loginForm = document.querySelector("#login-form")
const logininput = document.querySelector("#login-form input")
const loginButton = loginForm.querySelector("button")

const link = document.querySelector("a")

function onLoginSubmit(event){
    event.preventDefault()
    // 기본동작을 막는것 예를들어, submit 버튼을 눌렀을때 새로고침되는것
    console.dir(logininput.value)
    console.log("click!")
    const username = logininput.value

    if(username === ""){
        alert("Please Write Yout Name")
    }else if(username.length > 15){
        alert("Your name is so long.")
    }
}
function handleLinkClick(event){
    event.preventDefault()
    alert("click")
}
loginForm.addEventListener("submit", onLoginSubmit)
link.addEventListener("click",handleLinkClick)
