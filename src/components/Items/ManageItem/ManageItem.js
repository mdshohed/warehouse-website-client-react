
import React from 'react';
import useProducts from '../../../Hooks/useProducts';

const ManageItem = () => {
  const [products] = useProducts();
  return (
    <div className='container'>
      <h2>Manage page: {products.length}</h2>
    </div>
  );
};

export default ManageItem;