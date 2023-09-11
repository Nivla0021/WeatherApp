const apiKey = "881aff09233d7a07c65720510e33e1ef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

  if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "icons/cloudy.png";
      document.querySelector(".weather-name").innerHTML = "Cloudy";
  }else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "icons/sun.png";
      document.querySelector(".weather-name").innerHTML = "Clear";
  }else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "icons/rain.png";
    document.querySelector(".weather-name").innerHTML = "Rainy";
  }else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "icons/drizzle.png";
    document.querySelector(".weather-name").innerHTML = "Drizzly";
  }else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "icons/mist.png";
    document.querySelector(".weather-name").innerHTML = "Misty";
  }else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "icons/snow.png";
    document.querySelector(".weather-name").innerHTML = "Snowy";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  }

  

}
searchbtn.addEventListener("click", ()=>{
  checkWeather(searchbox.value);
})



