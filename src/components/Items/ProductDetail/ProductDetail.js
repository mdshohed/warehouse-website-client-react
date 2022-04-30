import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../../Hooks/useProductDetails';

const ProductDetail = () => {
  const productId = useParams();
  const [product] = useProductDetails(productId); 
  console.log(product); 

  return (
    <div>
      <h2>Your Product Code is: {product._id}</h2>
      
    </div>
  );
};

export default ProductDetail;