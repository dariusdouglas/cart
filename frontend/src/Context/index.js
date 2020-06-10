import React, { useState, useEffect } from 'react';

const ItemContext = React.createContext();

const ItemProvider = (props) => {
  const [cart, setCart] = useState([]);
//   const [gotCart, setGotCart] = useState(false);

  const getItems = async () => {
    if (!gotCart) {
      const response = await fetch('http://localhost:8000/cart/get');
      const cartResponse = await response.json();
      setCart(cartResponse);
    //   setGotCart(true);
    // }
  };

  const addToCart = async (productId) => {
    const response = await fetch('http://localhost:8000/cart/add', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ productId }), // body data type must match "Content-Type" header
    });
    const newCart = await response.json(); // parses JSON response into native JavaScript objects
    console.log('addToCart -> newCart', newCart);
    setCart(newCart);
  };

  useEffect(() => {
    getItems();
  }, [cart.items]);

  return <ItemContext.Provider value={{ cart, addToCart }}>{props.children}</ItemContext.Provider>;
};

export { ItemProvider, ItemContext };
