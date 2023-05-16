import { AiOutlineSearch } from "react-icons/ai";
import "./style.css";
import { useState } from "react";
import WeatherData from "../../components/Data";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);

  const searchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=10128c42c346fae49ae3650c814c4958&lang=pt_br`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setWeatherForecast(data);
        console.log(data);
      });
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Previsão do tempo</h1>
        <p>Confira o clima da sua cidade:</p>
        <div className="container-inputs">
          <input
            type="text"
            placeholder="Insira o nome da cidade"
            onChange={handleChange}
            value={city}
          />
          <button onClick={searchWeather}>
            <AiOutlineSearch />
          </button>
        </div>
        {weatherForecast ? (
          <WeatherData
            name={weatherForecast.name}
            temp={parseInt(weatherForecast.main.temp)}
            description={weatherForecast.weather[0].description}
            umidity={`${weatherForecast.main.humidity}%`}
            wind={`${weatherForecast.wind.speed}km/h`}
            iconElement={`http://openweathermap.org/img/wn/${weatherForecast.weather[0].icon}.png`}
          />
        ) : null}
      </div>
    </div>
  );
}
