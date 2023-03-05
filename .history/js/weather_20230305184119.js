const API_KEY = "93773d32044687a1209ace3c111fdb3a";
const weatherContainer = document.getElementById("weather");
const weatherSpan = document.createElement("span");

function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    getWeather(lat, lng);
    console.log("You live in", lat, lng);
    
}

function getWeather (lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
        const temp = data.main.temp;
        const weathers = data.weather[data.weather.length -1];
        weatherContainer.appendChild(weatherSpan);
        weatherSpan.innerHTML = `${temp}&#176;C ${weathers.main}`;
    })
}

function onGeoError () {
    alert("Can't find you!");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);