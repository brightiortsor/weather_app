let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let city = document.getElementById("city");

let getWeather = () => {
  let initialCityVal = city.value;
  if (initialCityVal.length == 0) {
    result.innerHTML = `<h3 class="errorNow">Please Enter a City Name...<h3/>`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${initialCityVal}&appid=${key}&units=metric`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        result.innerHTML = `
        <h2>${data.name}</h2>
    <h4>${data.weather[0].description}</h4>
    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
        <h1>${data.main.temp} &#176;</h1>
          <div class="temp-container">
      <div>
        <h4 class="title">Min</h4>
        <h4 class="temp">${data.main.temp_min}</h4>
      </div>
            <div>
        <h4 class="title">Max</h4>
        <h4 class="temp">${data.main.temp_max}</h4>
      </div>
    </div>
    `;
      })
      .catch(() => {
        result.innerHTML = `<h3 class="error">Oops!! City Not Found!<h3/>`;
      });
  }
};
window.addEventListener("load", getWeather);
searchBtn.addEventListener("click", getWeather);
