import React, { useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import AddItem from '../AddItem/AddItem';

const ManageItems = ({product}) => {
  const {itemName, imgLink, description, price, quantity} = product;
  return (
    <div className='container' >
      <div className="" style={{width:'300px'}}>
        <img style={{width: '100px'}} src={imgLink} alt="" />
        <h3>{itemName}</h3>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <button className='btn btn-primary mb-3'>Stock Update</button>
      </div>
    </div>
  );
};

export default ManageItems;