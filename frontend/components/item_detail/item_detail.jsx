import React from 'react';

const ItemDetail = ({ itemInfo }) => (
  <ul>
    <li>Reached</li>
    { itemInfo.map( (item, idx) => (
      <li key={idx}>hi</li>
    ))}
  </ul>
);
