const API_KEY = "048d6723c33275f406e50d88ab36b84e";

const searchButton = document.querySelector(".search-button");
const input = document.querySelector(".input");

searchButton.addEventListener("click", function () {
  const city = input.value;
  if (city) {
    weatherFetch(city);
  }

  input.value = "";
});

const weatherFetch = async function (city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    if (response.ok) {
      updateWeather(data);
    } else {
      console.error(data.message);
      document.querySelector(".weather").style.display = "none";
      document.querySelector(".error").style.display = "block";
    }
  } catch (err) {
    console.error(err.message);
  }
};

const updateWeather = function (data) {
  const tempEl = document.querySelector(".temp");
  const cityEl = document.querySelector(".city");
  const humidityEl = document.querySelector(".humidity");
  const windEl = document.querySelector(".wind");
  const icon = document.querySelector(".weather-icon");

  document.querySelector(".error").style.display = "none";
  document.querySelector(".weather").style.display = "block";

  tempEl.textContent = `${Math.round(data.main.temp)}°C`;
  cityEl.textContent = data.name;
  humidityEl.textContent = `${data.main.humidity}%`;
  windEl.textContent = `${data.wind.speed} km/h`;
  icon.src = `images/${data.weather[0].main}.png`;
};
