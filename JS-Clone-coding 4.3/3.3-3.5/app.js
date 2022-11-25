const h1 = document.querySelector("div.hello:first-child h1");
//const title = document.querySelectorAll("#hello")

function handleTitleClick() { //글씨가 파란색으로 변하는 이벤트
    h1.style.color = "blue";
}

function handleMouseEnter() { //요소에 올라갈 경우 글씨가 바뀌는 이벤트
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() { //없으면 바뀌는 이벤트
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);