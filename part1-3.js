daysOfWeek.push('sun');
// 결과값 : const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

let player = {
  name: 'nico',
  points: 10,
  fat: true,
};

// 데이터 안받는 함수
function sayHello() {
  console.log('Hello!');
}

sayHello(); //"Hello!"
sayHello(); //"Hello!"
sayHello(); //"Hello!"

// 데이터 받는 함수
function sayHello(nameOfPerson, age) {
  console.log('Hello my name is ' + nameOfPerson + "and I'm " + age);
}

sayHello('nico', 10); //"Hello my name is nico and I'm 10"
sayHello('dal', 23); //"Hello my name is dal and I'm 23"
sayHello('lynn', 21); //"Hello my name is lynn and I'm 21"

function plus(a, b) {
  console.log(a, b);
}

// plus()만 적을 시 undefined 출력

function plus(a, b) {
  console.log(a + b);
}

// plus()만 적을 시 NaN 출력
// NaN : Not a Number

const age = parseInt(prompt('How old are you?'));

if (isNaN(age) || age < 0) {
  console.log('Please write a real positive number');
} else if (age < 18) {
  console.log("You're too young.");
} else if (age >= 18 && age <= 50) {
  console.log('You can drink.');
} else if (age > 50 && age <= 80) {
  console.log('You should exercise.');
} else if (age > 80) {
  console.log('You can do whatever you want.');
}

const title = document.getElementById('id 이름');

title.innerText = 'Got you!';
//이렇게 해당 element의 값을 바꿀 수 있다.

document.getElementById('id 이름');

// 주어진 id와 일치하는 dom요소를 나타내는 Element 객체를 반환하거나 없으면 null을 반환한다.

// class 이름이 hello인 h1을 호출
const title = document.querySelector('.hello h1');
// class 이름이 hello인 h1중 첫번째 호출
const title = document.querySelector('.hello h1:first-child');
// id 이름이 hello인 form을 호출
const title = document.querySelector('#hello form');

const title = document.getElementById('id 이름');

// Element를 JSON과 같은 트리 구조로 출력
// DOM JS 객체의 전체 표현을 볼 수 있다.
console.dir(title);

// Click 이벤트 생성
// 누르면 글씨가 파란색으로 변하는 이벤트
function handleTitleClick() {
  title.style.color = 'blue';
}

// 마우스가 id="title"인 요소에 올라가면 글씨가 바뀌는 이벤트
function handleMouseEnter() {
  title.innerText = 'mouse is here!';
}
// 마우스가 id="title"인 요소 위에 없으면 글씨가 바뀌는 이벤트
function handleMouseLeave() {
  title.innerText = 'mouse is gone!';
}

title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);

// 그 외에 다양한 이벤트들이 있어 검색하면 더 많은 종류의 이벤트를 사용할 수 있다.
