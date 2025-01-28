export async function fetchWeather(city, apiKey) {
  const endpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;

  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return response.json();
}
