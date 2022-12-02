const a = 5; //상수
let /*const*/ inNicoFat = true; //변수
/* never use var */
console.log(a);

const b = 12; // number
const text = 'string'; // = string
isNicoFat = false; // = boolean
const c = null; // 비어있음
//undefined : 변수에 값을 부여하지 않은 상황

const days = ['text', 12, true, null, undefined, c]; //array
//배열에 무엇이든 들어갈 수 있음
const toBuy = ['potato', 'tomato', 'pizza'];

console.log(toBuy[2]);
toBuy[2] = 'water'; // const toBuy = ["potato","tomato","water"];
//값을 변환할 수 있음
toBuy.push('meat'); //배열에 값을 추가할 수 있음

const player = {
  name: 'Nico',
  age: 98,
};
console.log(player);
player.name = 'nicolas'; //변경가능
player.sexy = 'soon'; //추가가능
console.log(player);

function plus(potato, salad) {
  console.log(potato + salad);
}
plus(5, 10);

function minusFive(potato) {
  console.log(potato - 5);
}

minusFive(5, 10, 12, 34, 4, 5, 6, 7);

console.log('---calculator---');

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerof: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(1, 2);
calculator.minus(1, 2);
calculator.divide(1, 2);
calculator.powerof(1, 2);
