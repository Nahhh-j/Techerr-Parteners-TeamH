const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked"); // clicked를 classList에 추가
    //const clickedClass = "clicked";
    //if (h1.classList.contains === "clickedClass") {
        //h1.classList.remove(clickedClass);
    //} else {
        //h1.classList.add(clickedClass);
    //}
}

h1.addEventListener("click", handleTitleClick);