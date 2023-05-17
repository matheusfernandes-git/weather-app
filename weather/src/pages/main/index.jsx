import { AiOutlineSearch } from "react-icons/ai";
import "./style.css";
import { useState } from "react";
import WeatherData from "../../components/Data";
import { SuggestionButton } from "./SuggestionsButton";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [error, setError] = useState("");

  const searchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=10128c42c346fae49ae3650c814c4958&lang=pt_br`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (city === "") {
          setError("Insira um nome de uma cidade!");
        } else {
          setError(
            "Não foi possível encontrar o clima de uma cidade com esse nome!"
          );
        }
      })
      .then((data) => {
        setWeatherForecast(data);
        console.log(data);
      });

    setCity("");
    setError("");
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Confira o clima da sua cidade</h1>
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
        <div className="error-message">
          <p>{error}</p>
        </div>

        {weatherForecast ? (
          <WeatherData
            name={weatherForecast.name}
            country={weatherForecast.sys.country}
            temp={parseInt(weatherForecast.main.temp)}
            description={weatherForecast.weather[0].description}
            umidity={`${weatherForecast.main.humidity}%`}
            wind={`${weatherForecast.wind.speed}km/h`}
            iconElement={`http://openweathermap.org/img/wn/${weatherForecast.weather[0].icon}.png`}
          />
        ) : null}

        <div className="suggestions">
          <div>
            {SuggestionButton.map((btn) => {
              return (
                <button
                  onClick={() => {
                    const city = btn.id;
                    setCity(city);
                  }}
                  key={btn.id}
                >
                  {btn.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
