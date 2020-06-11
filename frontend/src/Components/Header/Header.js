import React, { useContext } from 'react';
import { ItemContext } from '../../Context/index';
import './Header.scss';

const Header = () => {
  const context = useContext(ItemContext);
  const { cart } = context;
  const cartItemCount = cart.items && cart.items.length;

  return (
    <div className="header">
      <ul>
        <li>One</li>
        <li className="cart-element">
          <i className="cartImage fa fa-shopping-cart"></i> {cartItemCount}
        </li>
      </ul>
    </div>
  );
};

export default Header;
