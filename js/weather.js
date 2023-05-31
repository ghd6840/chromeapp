const APIKEY = "90302b55ac2d0dbf697e4bbd40c34e2b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}`;
        console.log(data);
    });
}

function onGeoError(){
    alert('error');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);