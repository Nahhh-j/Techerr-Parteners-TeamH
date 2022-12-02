const age = prompt('How old are you?'); // <--코드를 정지 시킴

parseInt('15');

console.log(typeof '15', typeof parseInt('15'));

console.log(age, parseInt(age)); //결과값 : asfdsfafsf NaN

const age2 = parseInt(prompt('How old are you?'));

console.log(isNaN(age2));

if (isNaN(age2)) {
  //condition
  console.log('Please write a number');
} else {
  console.log('Thank you for writing your ag.');
}

if (isNaN(age2)) {
  //condition
  console.log('Please write a number');
} else if (age2 < 18) {
  console.log('You are too young.');
} else if (age2 >= 18 && age <= 50) {
  console.log('You can drink');
} else {
  console.log("You can't drink");
}

if (isNaN(age)) {
  console.log('Please write a number');
} else {
  console.log('Thank you for writing your ag.');
}
