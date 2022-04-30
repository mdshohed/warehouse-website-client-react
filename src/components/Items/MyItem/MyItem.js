import React from 'react';

const MyItem = ({item}) => {
  const {email, itemName, price, quantity} = item;
  return (
    <div>
      <p>Email: {email}</p>
      <p>ItemName: {itemName}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default MyItem;