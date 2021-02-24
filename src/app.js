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





function displayTemperature (response) {
    console.log(response.data);
    let temperature_view = document.querySelector("#temperature");
    let city_view = document.querySelector("#city");
    let weather_discription = document.querySelector("#weather_description");
    let humidity_value = document.querySelector("#humidity_value");
    let wind_speed = document.querySelector("#wind_speed");
    let current_date = document.querySelector("#date_time");
    let weather_icon = document.querySelector("#icon");
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
    let city_name = "minsk";
    let api_Key = '53ebcd69e2df003588fbe1573582f02b';
    let api_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_Key}&units=metric`;
    
    axios.get(api_URL).then(displayTemperature);



