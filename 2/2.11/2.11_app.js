const calculator = {
  add: function (a, b) {
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
  powerof: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerofResult = calculator.powerof(divideResult, minusResult);

console.log(plusResult);

calculator.add(1, 2);
calculator.minus(1, 2);
calculator.divide(1, 2);
calculator.powerof(1, 2);

const age = 96;
function calculateKrAge(ageOfForeinger) {
  ageOfForeinger + 2;
  return 'hello';
}

const KrAge = calculateKrAge(96);

console.log(KrAge);
