import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ManageItems = ({product}) => {
  const {_id,itemName, imgLink, description, price, quantity} = product;
  const navigate = useNavigate(); 
  
  const navigateToProductDetails = id =>{
    console.log(id);
    navigate(`product/${id}`);  
  }

  return (
    <div className='container' >
      <div className="" style={{width:'300px'}}>
        <img style={{width: '100px'}} src={imgLink} alt="" />
        <h3>{itemName}</h3>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <button className='btn btn-primary mb-3' onClick={()=>navigateToProductDetails(_id)}>Stock Update</button>
      </div>
    </div>
  );
};

export default ManageItems;