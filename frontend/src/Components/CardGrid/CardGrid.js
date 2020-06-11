import React, { useEffect, useState, useContext } from 'react';
import Card from '../Card/Card';
import { ItemContext, ItemProvider } from '../../Context/index';
import './CardGrid.scss';

const CardGrid = () => {
  const context = useContext(ItemContext);
  const { products } = context;

  const cardGrid =
    products &&
    products.map((item, index) => {
      return <Card key={index} item={item} />;
    });

  return <div className="cardGrid">{cardGrid}</div>;
};

export default CardGrid;
