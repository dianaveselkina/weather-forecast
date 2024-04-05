import React from 'react';
import Card from '../Card/Card';
import './cardList.css';
export const CardList = () => {
  return (
    <div className="cardList">
      <h3> Прогноз погоды</h3>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
