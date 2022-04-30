import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Products.css'
import Product from '../components/Products/Product/Product'
const Manage = () => {
  const [products] = useProducts();
  return (
    <div className='container'>
      <PageTitle title={"Manage Items"}></PageTitle>
      <div className="">
        <div className="product-container">
          {
            products.map(product=><Product 
            key={product._id}
            product={product}
            ></Product>)
          }
        </div>
      </div>
    </div>
  );
};

export default Manage;