import { CiLocationOn } from "react-icons/ci";
import { BsDroplet } from "react-icons/bs";
import { FiWind } from "react-icons/fi";
import "./style.css";

export default function WeatherData({
  name,
  country,
  temp,
  description,
  umidity,
  wind,
  iconElement,
}) {

  return (
    <div className="weather-data"> 
      <h2>
        <CiLocationOn />
        <span className="city">{name}</span>
        <p>- {country}</p>
      </h2>
      <p className="temperature">
        <span>{temp}</span>&deg;C
      </p>
      <div className="description-container">
        <p className="description">{description}</p>
        <img
          className="weather-icon"
          src={iconElement}
          alt="Condições atuais"
        ></img>
      </div>
      <div className="details-container">
        <p className="umidity">
          <BsDroplet />
          <span>{umidity}</span>
        </p>
        <p className="wind">
          <FiWind />
          <span>{wind}</span>
        </p>
      </div>
    </div>
  );
}
