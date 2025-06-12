import "./styles.css";
import { fetchWeather } from "./fetchWeather.js";
import { processWeatherData } from "./processData.js";


const apiKey = "34a2bba7b8dc4a6ba57153207252701";
const cityInput = document.getElementById("city");
const weatherDisplay = document.getElementById("weather-display");
const form = document.getElementById("weather-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a valid city");
    return;
  }

  weatherDisplay.innerHTML = "<p>Loading...</p>";

  try {
    const rawData = await fetchWeather(city, apiKey);
    const weatherData = processWeatherData(rawData);

    // 3-day weather forecast display
    const forecastHTML = weatherData.forecast
      .map(
        (day) => `
        <div class="forecast-day">
          <h4>${day.date}</h4>
          <p>Max Temp: ${day.maxTemp ?? "N/A"}°C</p>
          <p>Min Temp: ${day.minTemp ?? "N/A"}°C</p>
          <p>Condition: ${day.condition || "N/A"}</p>
          <img src="${day.icon || "fallback-icon.png"}" alt="${
          day.condition || "Weather icon"
        }">
        </div>
      `
      )
      .join("");

    const capitalizedCity = weatherData.location
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase());

    // Final display
    weatherDisplay.innerHTML = `
      <h3>3-Day Weather Forecast for ${capitalizedCity}</h3>
      <div class="forecast-container">${forecastHTML}</div>
    `;
  } catch (error) {
    console.error("Error:", error.message);
    weatherDisplay.innerHTML = `<p>Failed to get weather data. Please try again later.</p>`;
    alert("Failed to get weather data");
  }
});
