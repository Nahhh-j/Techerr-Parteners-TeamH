//2.9
const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.pust("meet");
console.log(toBuy);

//2.10 계산기 구현 문제
const calcultor = {
    add: function (a, b) {
    console.log(a + b);
    },
    minus: function (a, b) {
    console.log(a - b);
    },
    div: function (a, b) {
    console.log (a / b);
    },
    multi: function (a, b) {
    console.log (a * b);
    },
    power: function (a, b) {
    console.log (a ** b);
    },
    };
    
    calcultor.add(5, 1);
    calcultor.minus(4, 1);
    calcultor.div(4, 8);
    calcultor.multi(5, 2);
    calcultor.power(2, 8);

//2.11

//(1)
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

//(2)
const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);