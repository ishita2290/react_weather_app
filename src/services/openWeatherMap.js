const apiKey = "a29a6b4205fb9340472413b1a9e06cc2";

export function getOpenWeatherMapForecast(city, country) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},p=${country}&appid=${apiKey}`
  );
}
