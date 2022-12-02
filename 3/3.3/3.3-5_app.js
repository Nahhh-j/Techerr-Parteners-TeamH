const h1 = document.querySelector('.hello:first-child h1');

//console.log(title);

//event

//title.style.color = 'blue';

function handleTitleClick() {
  h1.style.color = 'blue';
  console.log('title was clicked');
}

function handleMouseEnter() {
  h1.innerText = 'Mouse is here!';
}

function handleMouseLeave() {
  h1.innerText = 'Mouse is gone!';
}

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
  alert('Copier!!');
}

function handleWindowOffline() {
  alert('SOS no WIFI');
}

function handleWindowOnline() {
  alert('ALL GOOOD');
}

//h1.addEventListener('click', handleTitleClick);
h1.onclick = handleTitleClick;
//h1.addEventListener('mouseenter', handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
h1.addEventListener('mouseleave', handleMouseLeave);

//listen resize

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offine', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);

//MDN->HTMLElement-> event
//console.dir(title);//on(event)
