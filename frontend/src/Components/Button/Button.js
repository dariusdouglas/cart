import React, { useContext } from 'react';
import { ItemContext, ItemProvider } from '../../Context/index';

import './Button.scss';

const Button = (props) => {
  const { quantity, id } = props;

  const context = useContext(ItemContext);
  const { cart } = context;

  const handleClick = (e) => {
    context.addToCart(e.target.id);
  };

  const button = (
    <button id={id} className="button" onClick={handleClick}>
      Add to Cart
    </button>
  );

  return (
    <div className="button-container">
      {button} | <span className="priceText">{quantity}</span>
    </div>
  );
};

export default Button;
