//2.6
const player = {
    name: "nico",
    points: 10,
    fat: true,
};
console.log(player);
player.points = player.points + 15;
console.log(player.points);

//2.7-2.8

//(1)
function sayHello(nameOfPerson, age) { //function 데이터를 받는 함수
    console.log(nameOfPerson);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

//(2)
const player = {
    name: "nico",
    sayHello: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you")
    },
};

player.sayHello("lynn");
player.sayHello("nico");

//(3)
function plus(a, b) {
    console.log(a + b);
}

plus(5, 5);