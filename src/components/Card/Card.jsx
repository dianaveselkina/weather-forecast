import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css';

const Card = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');

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
        setWeather(
          res.data.list.filter((el) => el.dt_txt.includes('21:00:00'))
        );
        setCity(res.data.city.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="wrapper">
      {!!weather.length ? (
        <>
          {weather.map((weather) => (
            <div className="card">
              <p>{city}</p>
              <p>{weather.dt_txt.slice(0, 10)}</p>

              <div className="forecast">
                <img
                  className="icon"
                  src="/img/temperature.png"
                  alt="temperature"
                />
                <p>{Math.round(weather.main.temp)}</p>
                <span>&deg;C</span>
              </div>
              <div className="forecast">
                <img className="icon" src="/img/humidity.png" alt="humidity" />
                <p>{Math.round(weather.main.humidity)}</p>
                <span>%</span>
              </div>
              <div className="forecast">
                <img className="icon" src="/img/cloud.png" alt="cloud" />
                <p>{weather.clouds.all}</p>
                <span>%</span>
              </div>
              <div className="forecast">
                <img className="icon" src="/img/wind.png" alt="wind" />
                <p>{weather.wind.speed}</p>
                <span>м/с</span>
              </div>
            </div>
          ))}
        </>
      ) : (
        console.log('err')
      )}
    </div>
  );
};
export default Card;
