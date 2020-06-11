import React, { useContext, useState, useRef } from 'react';
import { ItemContext, ItemProvider } from '../../Context/index';

import './Button.scss';

const Button = (props) => {
  const { quantity, id, favorite } = props;

  const context = useContext(ItemContext);
  const btnContainerRef = useRef(null);

  const { cart } = context;

  const [quantityLabel, updateQuantity] = useState(quantity);
  const [isFavorite, toggleFavorite] = useState(favorite);

  const handleClick = (e) => {
    updateQuantity(quantityLabel + 1);
    context.addToCart(btnContainerRef.current.id);
  };

  const button = (
    <button className="button" onClick={handleClick}>
      Add to Cart
      <i className="cartImage fa fa-shopping-cart"></i>
      <sup>
        <span className="priceText">{quantityLabel}</span>
      </sup>
    </button>
  );

  const handleFavoriteClick = (e) => {
    toggleFavorite(!isFavorite);
    context.favorite(btnContainerRef.current.id);
  };

  const starClasses = isFavorite ? 'fa fa-star checked' : 'fa fa-star';

  return (
    <div id={id} ref={btnContainerRef} className="button-container">
      {button}
      <span className="icon" onClick={handleFavoriteClick}>
        <i className={starClasses}></i>
      </span>
    </div>
  );
};

export default Button;
