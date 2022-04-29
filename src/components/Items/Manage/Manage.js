import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import AddItem from '../AddItem/AddItem';
import ManageItems from '../ManageItems/ManageItems';

const Manage = () => {
  const [products] = useProducts();
  return (
    <div className='container'>
      <PageTitle title={"Manage Items"}></PageTitle>
      
      {
        products.map(product=><ManageItems 
        key={product._id}
        product={product}
        ></ManageItems>)
      }
    </div>
  );
};

export default Manage;