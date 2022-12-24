const weather = document.querySelector("#weather span:first-child");//weather의 자식을 객체로 받아오기
const city = document.querySelector("#weather span:last-child");//weather의 자식을 객체로 받아오기
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";//API수정 필요
function onGeoOk(position) { //현재 위치 값 출력 
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 
    fetch(url) .then((response) => response.json()) .then((data) => { 
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
} 
function onGeoError() { //에러처리 
    alert("Can't find you. No weather for you.");
} 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);