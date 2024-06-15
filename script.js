const getWeather =() => {
const apiKey="55eaf1f4460c67dc07138538808b306e";
const cityName = document.getElementById("inp").value
let weatherIcon = document.querySelector(".weather-icon");


if (cityName == '') {
  alert('please enter your city');
  return;
}
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
fetch(apiUrl)
.then(response => response.json())
.then(data => {

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "clear.png";
  }else if (data.weather[0].main == "Sunrise") {
    weatherIcon.src = "suuny.png";} 
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rain.png";
  }
  
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
         document.querySelector(".temp").innerHTML =
           Math.round(data.main.temp) + "°c";
         document.querySelector(".humidity").innerHTML =
           data.main.humidity + "%";
         document.querySelector(".wind").innerHTML =
        //  data.main.wind + "km/h"
         inp.value = ''
})
.catch(error =>{
  console.error('Error fetching current weather data', error);
  alert('Error fetching current weather data. Please try again.');
})

}






























    
  