const h1 = document.querySelector('.hello:first-child h1');

//console.log(title);

//event

//title.style.color = 'blue';

function handleTitleClick() {
  if (h1.style.color === 'blue') {
    h1.style.color = 'tomato';
  } else {
    h1.style.color = 'blue';
  }
}

h1.addEventListener('click', handleTitleClick);
