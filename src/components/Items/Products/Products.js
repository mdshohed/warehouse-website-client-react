import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import ManageItems from '../Product/Product';
import './Products.css'

const Manage = () => {
  const [products] = useProducts();
  return (
    <div className='container'>
      <PageTitle title={"Manage Items"}></PageTitle>
      <div className="">
        <div className="product-container">
          {
            products.map(product=><ManageItems 
            key={product._id}
            product={product}
            ></ManageItems>)
          }
        </div>
      </div>
    </div>
  );
};

export default Manage;