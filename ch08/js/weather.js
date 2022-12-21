
const API_KEY = "";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in",lat,lon);
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat)&lon=${lon}&appid=${API_KEY}`
    fetch(url).then(response => response.json().then(data =>{
        const weatherContainer = document.getElementById("#weather span:first-child");
        const city  =document.getElementById("#weather span:last-child");
        const name = data.name;
        weather.innertext =`${data.weather[0].main} / ${data.main.temp}`;
        const weather = data.weather[0].main;
    }));
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); //wifi, gps 위치