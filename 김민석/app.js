const calculater = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

alert(calculater.plus(5, 6));
alert(calculater.divide(6, 2));
alert(calculater.power(2, 3));
