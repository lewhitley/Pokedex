import React from 'react';

const ItemDetail = ({ itemInfo }) => (
  <ul>
      <li>{itemInfo.name}</li>
      <li>Happiness: {itemInfo.happiness}</li>
      <li>Price: ${itemInfo.price}</li>
  </ul>
);

export default ItemDetail;
