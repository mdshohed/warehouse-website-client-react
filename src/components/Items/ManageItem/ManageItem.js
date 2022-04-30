
import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const ManageItem = () => {
  const [products] = useProducts();
  return (
    <div className='container'>
      <PageTitle title={"Manage Items"}></PageTitle>
      <h2>Manage page: {products.length}</h2>
    </div>
  );
};

export default ManageItem;