export function processWeatherData(rawData) {
  const location = rawData.location.name;
  const forecast = rawData.forecast.forecastday.map((day) => ({
    date: day.date,
    maxTemp: day.day.maxtemp_c,
    minTemp: day.day.mintemp_c,
    condition: day.day.condition.text,
    icon: day.day.condition.icon,
  }));

  return { location, forecast };
}
