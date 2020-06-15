import React, { useContext, useState, useRef, useEffect } from 'react';
import { ItemContext, ItemProvider } from '../../Context/index';

import './Button.scss';

const Button = (props) => {
  const { item } = props;

  const context = useContext(ItemContext);
  const btnContainerRef = useRef(null);

  const { cart } = context;

  const [quantityLabel, updateQuantity] = useState(0);
  const [isFavorite, toggleFavorite] = useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [itemWasFound, setFound] = useState(false);

  const getCorrespondingCartItem = () => {
    const correspondingCartItem =
      cart.items && cart.items.find((cartItem) => cartItem.product === item._id);
    if (correspondingCartItem) {
      setFound(true);
      setCartItem(correspondingCartItem);
      updateQuantity(correspondingCartItem.quantity);
      toggleFavorite(correspondingCartItem.favorite);
    }
  };

  // check if item was found
  // if it was, no need to find the item again
  useEffect(() => {
    if (!itemWasFound) {
      getCorrespondingCartItem();
    }
  }, [cart.items]);

  const handleClick = (e) => {
    updateQuantity(quantityLabel + 1);
    context.addToCart(btnContainerRef.current.id);
  };

  const button = cartItem ? (
    <button className="button" onClick={handleClick}>
      Add to Cart
      <i className="cartImage fa fa-shopping-cart"></i>
      <sup>
        <span className="priceText">{quantityLabel}</span>
      </sup>
    </button>
  ) : (
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
    <div id={item._id} ref={btnContainerRef} className="button-container">
      {button}
      <span className="icon" onClick={handleFavoriteClick}>
        <i className={starClasses}></i>
      </span>
    </div>
  );
};

export default Button;
