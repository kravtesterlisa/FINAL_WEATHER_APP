
function displayTemperature (response) {
    console.log(response.data);
    let temperature_view = document.querySelector("#temperature");
    let city_view = document.querySelector("#city");
    let weather_discription = document.querySelector("#weather_description");
    let humidity_value = document.querySelector("#humidity_value");
    let wind_speed = document.querySelector("#wind_speed");
    temperature_view.innerHTML = Math.round(response.data.main.temp);
    city_view.innerHTML = response.data.name;
    weather_discription.innerHTML = response.data.weather[0].description;
    humidity_value.innerHTML = response.data.main.humidity;
    wind_speed.innerHTML = Math.round(response.data.wind.speed);


    


}
    let city_name = "new york"
    let api_Key = '53ebcd69e2df003588fbe1573582f02b';
    let api_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_Key}&units=metric`;
    
    axios.get(api_URL).then(displayTemperature);



/*function displayWeather(response) {
        let weatherDiv = document.querySelector("#weather");
        let temperature = Math.round(response.data.main.temp);
        let description = response.data.weather[0].description;

        weatherDiv.innerHTML = `It is ${temperature} degrees, ${description}, in ${
          response.data.name
        }`;
      }

      let city = "Rome";
      let Apikey = "5f472b7acba333cd8a035ea85a0d4d4c";
      let APiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`;

      axios.get(url).then(displayWeather);*/