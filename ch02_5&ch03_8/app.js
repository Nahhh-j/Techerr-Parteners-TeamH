
//ch02_5
const amIFat = false;
let something;
consloe.log(amIFat);

//ch02_6
const mon = "mon";
const thr = "thr";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";

const daysOfWeek = [mon,thr,wed,thu,fri,sat];
const nonsense =[1,2,"hello",false,null,true, undefined,"jung"];

console.log(daysOfWeek[1],nonsense);

daysOfWeek.push("sunday");

console.log(daysOfWeek);

const playerName = "nico"
const playerPoints  = 1212;
const playerHandsome = false;
const playerFat = "little bit";

const player = ["jung", 1212, fasle , "little bit"];

//ch02_7
const players = {
    name : "nico",
    points : 10,
    fat : true,
};
console.log(player);
player.fat = false;
console.log(player);

//ch02_8
function sayHello(nameOfperson, age){
  console.log("hello" + nameOfperson + "and I'm" + age);
}

sayHello("jung", 20);
sayHello("lynn", 21);
console.log("hello");

function plus(a,b){
    console.log(a + b);
}
plus();

function divide(a,b){
    consloe.log(a/b);
}
divide(60,4);

const player = {
    name : "jung",
    sayHello : function(a){
        console.log("helo" + a);
    }
}
console.log(player,name)
player.sayHello("jung")

//ch02_10
const calculator = {
    add : function(a,b) {
        console.log(a + b);
    },
    minus : function(a,b){
        console.log(a - b);
    },
    divide : function(a,b){
        console.log(a / b);
    },
    z : function(a,b){
        console.log(a ** b);
    }
}
calculator.add(1,1);
calculator.minus(1,1);
calculator.divide(1,1);
calculator.z(1,1);

//ch02_14
const age = parseInt(prompt("how old are you?")); 

console.log(isNAN(age)); 

if(condition) {
    //condition === true
}else {
    //condition === false 
}

if (isNaN(age || age < 0 )){
    console.log("plase write a number")
}else if(age < 18){
    console.log("you are too young")
}else if(age >= 18 && age <= 50){
    console.log("you can drink")
}else if(age >= 50 && age <= 80){
    console.log("you should exercise")
}
else{
    console.log("you can do whaterver you want")
}

//ch03_01
const title = document.getElementById("title");
title.innerText = "Got you!"


//ch03_03
const hellos = document.getElementsByClassName("hello")
console.log(hellos)

const title = document.querySelectorAll(".hello h1")
//const title = document.querySelectorAll("#hello")
console.log(title)
function handleTitleClick(){
    title.style.color = "blue"
}
title.innerText = "hello1"
title.addEventListener("click",handleTitleClick)
handleTitleClick()

const title2 = document.querySelectorAll(".hello h1: first-child")
console.dir(title2)

//ch03_04
const title = document.querySelectorAll(".hello h1")
//const title = document.querySelectorAll("#hello")
console.log(title)
function handleTitleClick(){
    const clickedClass = "clicked"
//    if (h1.classList.contains(clickedClass)){
//     h1.className.remove(clickedClass)
//    }else {
//     h1.classList.add(clickedClass)
//    }
    h1.classList.toggle("clicked")
}
h1.addEventListener("click", handleTitleClick)

function handleMouseEnter(){
    title.innerText = "mousehere"
}

function handleMouseLeave(){
    title.innerText = "mousegone"
}
title.addEventListener("click",handleTitleClick)
//title.onClick = handleTitleClick; 과 같다 
title.addEventListener("mouseenter",handleMouseEnter)
title.addEventListener("mouseleave",handleMouseLeave)

//ch03_05
function handleWindowResize(){
    document.body.style.backgroundColor ="tomato"
}
function handleWindowCopy(){
    alert("copy")
}
function handleWindowOffline(){
    alert("SOS no Wifi")
}
function handleWindowOnline(){
    alert("ALL GOOD")
}
window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);

//ch03_06
const currentColor = h1.style.color;
let newColor;
function handleTitleClick(){
  if(  currentColor === "blue" ){
    newColor= "tomato"
  }else {
    newColor === "blue" 
  }
  h1.style.color = newColor
}


