function sayHello(nameOfPearson, age) {
  console.log('Hello my name is' + nameOfPearson + "and I'm " + age);
}

sayHello('nico', 10);
sayHello('dal', 23);
sayHello('lynn', 21);

function plus(firstNumber, secendNumber) {
  console.log(firstNumber + secendNumber);
}

function divide(a, b) {
  console.log(a / b);
}

plus(8 + 6);
divide(98, 20);

const player = {
  name: 'nico',
  sayHello: function (otherPersonName) {
    console.log('Hello' + otherPersonName + 'nice to meet you!');
  },
};

console.log(player.name);
player.sayHello('lynn');
player.sayHello('nico');
