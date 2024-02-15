const apiKey = '5fc5a91a9c2492625c988d91b9e8f7f8';
const webUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';

const txtname = document.querySelector('.main-city');
const temp = document.querySelector('.main-text');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.windspeed');
const placeName = document.querySelector('#weather-input');
const weatherIcon = document.querySelector('.weather-image');
const button = document.querySelector('.button');

async function getWeather(location) {
    const response = await fetch(webUrl + `&appid=${apiKey}` + `&q=${location}`);
    const data = await response.json();

    if (response.ok) {
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.wheather-items').style.display = 'block';
        txtname.innerHTML = data.name;
        temp.innerHTML = Math.floor(data.main.temp) + '°C';
        humidity.innerHTML = data.main.humidity + '%';
        windspeed.innerHTML = data.wind.speed + ' km/h';
        let imagedetails = data.weather[0].main;
        weatherIcon.src = imagedetails.toLowerCase() + '.png';
    } else {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.wheather-items').style.display = 'none';
    }
}

button.addEventListener('click', () => {
    getWeather(placeName.value);
});
