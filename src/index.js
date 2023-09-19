const cityInput = document.querySelector("input#city");
const cityBtn = document.querySelector("button");
let city = "london";

cityBtn.addEventListener("click", () => {
    city = cityInput.value;
    getWeather(city);
});

async function getWeather(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=cf72d473ed464f45be194444231809&q=${city}`, {mode: "cors"});
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(weatherData.current.temp_c);
    document.querySelector("h1#city-name").textContent = `${weatherData.location.name}`;
    document.querySelector("h3#date").textContent = `${weatherData.location.localtime}`;
    document.querySelector("h2#weather").textContent = `${weatherData.current.condition.text}`;
    document.querySelector("h1#temperature").textContent = `${weatherData.current.temp_c}°C`;
}