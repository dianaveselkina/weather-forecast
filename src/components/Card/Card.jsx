import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css';

const Card = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  const [day, setDay] = useState('');
  useEffect(() => {
    fetchCard();
  }, []);
  const fetchCard = () => {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/forecast?cnt=40&units=metric&q=Ryazan&appid=ed1041d1a5e2e63eb8f1f7036d40ff14'
      )
      .then((res) => {
        console.log(res);
        setWeather(res.data.list);
        setCity(res.data.city.name);
        setDay(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="wrapper">
      {!!weather.length ? (
        <>
          <p>{city}</p>
          <p>{day[0].dt_txt}</p>
          <div className="forecast">
            <img
              className="icon"
              src="/img/temperature.png"
              alt="temperature"
            />
            <p>{Math.round(weather[0].main.temp)}</p>
            <span>&deg;C</span>
          </div>
          <div className="forecast">
            <img className="icon" src="/img/humidity.png" alt="humidity" />
            <p>{Math.round(weather[0].main.humidity)}</p>
            <span>%</span>
          </div>
          <div className="forecast">
            <img className="icon" src="/img/cloud.png" alt="cloud" />
            <p>{weather[0].clouds.all}</p>
            <span>%</span>
          </div>
          <div className="forecast">
            <img className="icon" src="/img/wind.png" alt="wind" />
            <p>{weather[0].wind.speed}</p>
            <span>м/с</span>
          </div>
        </>
      ) : (
        console.log('err')
      )}
    </div>
  );
};
export default Card;
