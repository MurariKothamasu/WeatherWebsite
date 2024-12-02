const apiKey = "61e16708b5074e310b0175b2c716e649";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

let searchInputValue = document.querySelector(".search input");

let temperature = document.querySelector(".temp");

let cityName = document.querySelector(".city-name");

let weatherDetailsDiv = document.querySelector(".weather-details");

let weatherImg = document.querySelector('.weather-img');

let invalidCity = document.querySelector('.invalid-city');

let windSpeed = document.querySelector('.wind-speed');

let enterCityName = document.querySelector('.Enter-city-name');

let humidity = document.querySelector('.humidity');

weatherDetailsDiv.style.display ='none';

invalidCity.style.display = 'none';



document.querySelector(".search button").addEventListener("click", () => {
  console.log(searchInputValue.value);
  let response = fetch(
    url + `&q=${searchInputValue.value}` + `&appid=${apiKey}`
  );
  console.log(response);

  response
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.message == "city not found") {
        weatherDetailsDiv.style.display = 'none';
        invalidCity.style.display = 'block'
        enterCityName.style.display ='none';
      } else {
        weatherDetailsDiv.style.display ='block'
        invalidCity.style.display = 'none';
        enterCityName.style.display = 'none'
        
        console.log(data);
        temperature.innerHTML = Math.round(data.main.temp) + "°c";
        cityName.innerHTML = data.name;
        let weatherDescription = data.weather[0].main;
        if(weatherDescription === 'Rain'){
          weatherImg.src = 'images/rain.png';
        }else if(weatherDescription === 'Clouds'){
          weatherImg.src = 'images/clouds.png';
        }else if(weatherDescription === 'Clear'){
          weatherImg.src = 'images/clear.png';
        }else if(weatherDescription === 'Drizzle'){
          weatherImg.src = 'images/drizzle.png';
        }else if(weatherDescription === 'Humidity'){
          weatherImg.src = 'images/humidity.png';
        }else if(weatherDescription === 'Mist'){
          weatherImg.src = 'images/mist.png';
        }else if(weatherDescription === 'Snow'){
          weatherImg.src = 'images/snow.png';
        }else{
          weatherImg.src ='images/wind.png';
        }

        windSpeed.innerHTML = Math.round(data.wind.speed) + ' km/h';

        humidity.innerHTML = Math.round(data.main.humidity) + '%'

        
      }
    });
});
