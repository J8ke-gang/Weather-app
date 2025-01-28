import { fetchWeather } from './fetchWeather.js';
import { processWeatherData } from './processData.js';

const apiKey = '34a2bba7b8dc4a6ba57153207252701';
const cityInput = document.getElementById('city');
const weatherDisplay = document.getElementById('weather-display');
const getWeatherButton = document.getElementById('get-weather-button');

getWeatherButton.addEventListener('click', async () => {
  const city = cityInput.value.trim(); // Trim input to remove extra spaces
  if (!city) {
    alert('Please enter a valid city');
    return;
  }

  weatherDisplay.innerHTML = '<p>Loading...</p>'; // Show a loading message

  try {
    const rawData = await fetchWeather(city, apiKey); // Fetch raw data
    const weatherData = processWeatherData(rawData); // Process the data

    // Display processed data
    weatherDisplay.innerHTML = `
      <h3>Weather in ${weatherData.location}</h3>
      <p>Temperature: ${weatherData.temperature}°C</p>
      <p>Condition: ${weatherData.condition}</p>
      <img src="${weatherData.icon}" alt="${weatherData.condition}">
    `;
  } catch (error) {
    console.error('Error:', error.message);
    weatherDisplay.innerHTML = `<p>Failed to get weather data. Please try again later.</p>`;
    alert('Failed to get weather data');
  }
});
