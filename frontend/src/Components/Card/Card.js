import React from 'react';
import './Card.scss';
import Button from '../Button/Button';

const card = (props) => {
  const { item } = props;
  return (
    <div className="card">
      <img src={item.image} />
      <p className="cardName">{item.name}</p>
      <p className="cardPrice">${item.price}</p>
      <Button quantity={item.quantity} id={item.product} />
    </div>
  );
};

export default card;
