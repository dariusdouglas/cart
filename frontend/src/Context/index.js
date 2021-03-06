import React, { useState, useEffect } from 'react';

const ItemContext = React.createContext();

const ItemProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('http://localhost:8000/products/get');
    const cartResponse = await response.json();
    setProducts(cartResponse);
  };

  const getItems = async () => {
    const response = await fetch('http://localhost:8000/cart/get');
    const cartResponse = await response.json();
    setCart(cartResponse);
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
    setCart(newCart);
  };

  const favorite = async (productId) => {
    const response = await fetch('http://localhost:8000/cart/favorite', {
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
    setCart(newCart);
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <ItemContext.Provider value={{ cart, products, addToCart, favorite }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export { ItemProvider, ItemContext };
