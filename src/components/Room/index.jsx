import { useState } from 'react';
import './style.css';

export const Room = ({ title, image, price, unit, onSelect, id }) => {
  const handleClick = () => {
    onSelect(id);
    console.log(id);
  };
  return (
    <div className="card" onClick={handleClick}>
      <img className="card__image" src={image} />
      <div className="card__title">{title}</div>
      <div className="card__body">
        {price}
        {unit}
      </div>
    </div>
  );
};
