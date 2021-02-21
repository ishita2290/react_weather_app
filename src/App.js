import React, { useState } from "react";
import styles from "./App.module.css";
import Title from "./Components/Title";
import LocationForm from "./Components/LocationForm";
import Location from "./Components/Location";
import Humidity from "./Components/Humidity";

import Temperature from "./Components/Temperature";
// import Date_Time from "./Components/Date_Time";
import Dates from "./Components/Dates";
import Time from "./Components/Time";
import Error from "./Components/Error";
import { getOpenWeatherMapForecast } from "./services/openWeatherMap";
import Description from "./Components/Description";

function App() {
  const [weatherForcast, setWeatherForcast] = useState({
    city: "",
    country: "",
    date_time: "",
    temperature: "",
    temp_min: "",
    temp_max: "",
    feels_like: "",
    dateNextDay1: "",
    dateNextDay2: "",
    dateNextDay3: "",
    dateNextDay4: "",
    humidity: "",
    description: "",
    error: "",
  });
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCityChange = (event) => {
    // console.log(event.target.value);
    setCity(event.target.value);
  };
  const handleCountryChange = (event) => {
    // console.log(event.target.value);
    setCountry(event.target.value);
  };
  const [tempForcastNext4Days, setTemp4Days] = useState([]);
 
  const getWeather = (e) => {
    e.preventDefault();

    
    const kelvin = 273;

    if (country && city) {
      getOpenWeatherMapForecast(city,country)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setWeatherForcast({
            city: result.city.name,
            country: result.city.country,
            date_time: result.list[0].dt_txt,
            temperature: Math.floor(result.list[0].main.temp - kelvin),
            temp_min: Math.floor(result.list[0].main.temp_min - kelvin),
            temp_max: Math.floor(result.list[0].main.temp_max - kelvin),
            feels_like: Math.floor(result.list[0].main.feels_like - kelvin),

            humidity: result.list[0].main.humidity,
            description: result.list[0].weather[0].description,
            error: "",
          });
          setTemp4Days([
            result.list[1].main.temp - kelvin,
            result.list[2].main.temp - kelvin,
            result.list[3].main.temp - kelvin,
            result.list[4].main.temp - kelvin,
          ]);
         
        });
    } else {
      setWeatherForcast({
        city: "",
        country: "",
        date_time: "",
        temperature: "",
        temp_min: "",
        temp_max: "",
        feels_like: "",
        humidity: "",
        description: "",
        error: "Please enter city and country",
      });
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <Title />
      </div>

      <div
        className={weatherForcast.temperature > 18 ? styles.warm : styles.cold}
      >
        <div class={styles.date_Time}>
          <Dates />
          <Time />
        </div>
        <div className={styles.locationForm}>
          <LocationForm
            handleCityChange={handleCityChange}
            handleCountryChange={handleCountryChange}
            getWeather={getWeather}
          />
        </div>
        <div className={styles.error}>
            <Error error={weatherForcast.error} />
          </div>
        <main className={(weatherForcast.city && weatherForcast.country) ? styles.main : styles.nomain }>
          
          <div className={styles.location_date}>
            <Location
              city={weatherForcast.city}
              country={weatherForcast.country}
            />

           </div>
          <div className={styles.temperature}>
            <Temperature temperature={weatherForcast.temperature} />
          </div>
          <div className={styles.feels_like}>
            <Temperature
              temp_desc="feels like"
              temperature={weatherForcast.feels_like}
            />
          </div>
          <div className={styles.max_min}>
            <div className={styles.max}>
              <Temperature
                temp_desc="Max-temp"
                temperature={weatherForcast.temp_max}
              />
            </div>
            <Temperature
              temp_desc="Min-temp"
              temperature={weatherForcast.temp_min}
            />
          </div>
          <div className={styles.humidity}>
            <Humidity humidity={weatherForcast.humidity} />
          </div>
          <div className={styles.description}>
            <Description desc={weatherForcast.description} />
          </div>
          <div className={styles.temp4Days}>
            {tempForcastNext4Days.map((temp, index) => (
              <Temperature
                key={index}
                temp_desc={<p key={index}>Next-Day:{index + 1} </p>}
                temperature={Math.floor(temp)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
