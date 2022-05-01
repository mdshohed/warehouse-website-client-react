import React from 'react';

const MyItem = ({item}) => {
  const {productId, email, itemName, price, quantity, imgLink} = item;
  return (
    <div>
      <p>{productId}</p>
      <p>Email: {email}</p>
      <img src={imgLink} style={{width: "100px"}} alt="" />
      <p>ItemName: {itemName}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default MyItem;