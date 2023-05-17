import { CiLocationOn } from "react-icons/ci";
import { BsDroplet } from "react-icons/bs";
import { AiOutlineClose } from 'react-icons/ai';
import { FiWind } from "react-icons/fi";
import "./style.css";
import { useState } from "react";

export default function WeatherData({
  name,
  country,
  temp,
  description,
  umidity,
  wind,
  iconElement,
}) {

  const[open, setOpen] = useState(true);
  const closed = () => setOpen(!open);

  return (
    <div className={open ? "weather-data" : "weather-data-closed"}> 
      <div className="closed">
        <AiOutlineClose onClick={closed} size={22}/>
      </div>
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

// className="weather-data"
