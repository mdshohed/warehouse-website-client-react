import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Products.css'
import Product from '../Product/Product'

const Products = () => {
  const [products] = useProducts();
  return (
    <div className='container'>
      <PageTitle title={"All Products"}></PageTitle>
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

export default Products;