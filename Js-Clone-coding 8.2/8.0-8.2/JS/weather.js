const API_KEY = "";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in",lat,lon);
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

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);