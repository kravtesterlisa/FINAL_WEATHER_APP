


//Functions:
///////////////
function formatData (timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours <10){
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes <10){
        minutes = `0${minutes}`;
    }
    let week_days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = week_days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}


function formatHours (timestamp) {

  let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours <10){
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes <10){
        minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;




}

function displayTemperature (response) {
    console.log(response.data);
    let temperature_view = document.querySelector("#temperature");
    let city_view = document.querySelector("#city");
    let weather_discription = document.querySelector("#weather_description");
    let humidity_value = document.querySelector("#humidity_value");
    let wind_speed = document.querySelector("#wind_speed");
    let current_date = document.querySelector("#date_time");
    let weather_icon = document.querySelector("#icon");

    celsiusTemperature = response.data.main.temp;

    temperature_view.innerHTML = Math.round(response.data.main.temp);
    city_view.innerHTML = response.data.name;
    weather_discription.innerHTML = response.data.weather[0].description;
    humidity_value.innerHTML = response.data.main.humidity;
    wind_speed.innerHTML = Math.round(response.data.wind.speed);
    current_date.innerHTML = formatData(response.data.dt * 1000);
    weather_icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
    weather_icon.setAttribute("alt", response.data.weather[0].description);

}


//to do this later:
//weather-forecast

function displayWeatherForecast(response){

    let forecastElement = document.querySelector("#weather-forecast");
    let forecast = null;
    let forecastRow = ``;

    for (let index = 0; index < 6; index++) {
        
        forecast = response.data.list[index];
        forecastRow += `<div class="col-2">
        <h7 class="hours">
            ${formatHours(forecast.dt * 1000)}
            </h7>
            <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png">
            <div class="forecast-temperature">
                <strong>${Math.round(forecast.main.temp_max)}°/</strong>
                ${Math.round(forecast.main.temp_min)}°
            </div>
        </div>`;
        
    }
    forecastElement.innerHTML = forecastRow;

}   




function searchByInput (cityName){
    
    let api_Key = '53ebcd69e2df003588fbe1573582f02b';
    let api_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_Key}&units=metric`;
    axios.get(api_URL).then(displayTemperature);

    api_URL =`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api_Key}&units=metric`;
    axios.get(api_URL).then(displayWeatherForecast);
}






function searchCity(event) {
    event.preventDefault();
    let cityName = document.querySelector("#input-city").value;
    console.log(cityName);
    searchByInput(cityName);
}

function farenheitTemperature(event) {
    event.preventDefault();
    let farenheitValue = Math.round((celsiusTemperature * 9)/5 + 32);
    let temperature_view = document.querySelector("#temperature");
    temperature_view.innerHTML = farenheitValue;
   
}

function celsiusReturn(event) {
    event.preventDefault();
    let temperature_view = document.querySelector("#temperature");
    temperature_view.innerHTML = Math.round(celsiusTemperature);
}

// Code:
///////////////
let form_search = document.querySelector("#search-form");
form_search.addEventListener("submit", searchCity);


let farenheitConversion = document.querySelector("#conversation-f");
farenheitConversion.addEventListener("click", farenheitTemperature);

let celsiusConversation = document.querySelector("#conversation-c");
celsiusConversation.addEventListener("click", celsiusReturn)

let celsiusTemperature = null; 


