import "./styles.css"
import { fetchWeather } from './fetchWeather.js';
import { processWeatherData } from './processData.js';


const apiKey = '34a2bba7b8dc4a6ba57153207252701';
const cityInput = document.getElementById('city');
const weatherDisplay = document.getElementById('weather-display');
const getWeatherButton = document.getElementById('get-weather-button');

getWeatherButton.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert('Please enter a valid city'); //alert for invalid city
    return;
  }

  weatherDisplay.innerHTML = '<p>Loading...</p>'; // Show loading message

  try {
    const rawData = await fetchWeather(city, apiKey); 
    const weatherData = processWeatherData(rawData); 

   // 3-day weather forecast display
   const forecastHTML = weatherData.forecast
   .map(
     (day) => `
       <div class="forecast-day">
         <h4>${day.date}</h4>
         <p>Max Temp: ${day.maxTemp}°C</p>
         <p>Min Temp: ${day.minTemp}°C</p>
         <p>Condition: ${day.condition}</p>
         <img src="${day.icon}" alt="${day.condition}">
       </div>
     `
   )
   .join(''); // Join all forecast day HTML into a single string

 // location and forecast
 weatherDisplay.innerHTML = `
   <h3>3-Day Weather Forecast for ${weatherData.location}</h3>
   <div class="forecast-container">${forecastHTML}</div>
 `;
} catch (error) {
 console.error('Error:', error.message);
 weatherDisplay.innerHTML = `<p>Failed to get weather data. Please try again later.</p>`;
 alert('Failed to get weather data');
}
});
