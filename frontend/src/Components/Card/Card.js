import React, { useContext, useState, useEffect } from 'react';
import './Card.scss';
import { ItemContext, ItemProvider } from '../../Context/index';
import Button from '../Button/Button';

const Card = (props) => {
  const { item } = props;

  const context = useContext(ItemContext);
  const { cart } = context;

  const correspondingCartItem =
    cart.items && cart.items.find((cartItem) => cartItem.product === item._id);

  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    if (correspondingCartItem) setCartItem(correspondingCartItem);
  }, [cart.items]);

  //   const button = cartItem && (
  //     <Button
  //       quantity={cartItem ? cartItem.quantity : 0}
  //       id={item._id}
  //       favorite={cartItem ? cartItem.favorite : false}
  //     />
  //   );

  let button;
  //   let button2;

  if (cartItem && cartItem.quantity) {
    button = <Button quantity={cartItem.quantity} id={item._id} favorite={cartItem.favorite} />;
  } else {
    button = <Button quantity={0} id={item._id} favorite={false} />;
  }

  //   const finalButton = button ? button : button2;

  //   const button = cartItem && cartItem.quantity && (
  //     <Button quantity={cartItem.quantity} id={item._id} favorite={cartItem.favorite} />
  //   );

  //   cartItem && cartItem.quantity && (
  //     <Button quantity={cartItem.quantity} id={item._id} favorite={cartItem.favorite} />
  //   );
  // : (
  //   <Button quantity={0} id={item._id} favorite={false} />
  // );

  return (
    <div className="card">
      <img src={item.image} />
      <p className="cardName">{item.name}</p>
      <p className="cardPrice">${item.price}</p>
      {button}
      {/* {cartItem && cartItem.quantity ? (
        <Button quantity={cartItem.quantity} id={item._id} favorite={cartItem.favorite} />
      ) : (
        <Button quantity={0} id={item._id} favorite={false} />
      )} */}
      {/* {cartItem && cartItem.quantity && (
        <Button quantity={cartItem.quantity} id={item._id} favorite={cartItem.favorite} />
      )} */}
    </div>
  );
};

export default Card;
