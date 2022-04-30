import React from 'react';
import useOrder from '../../../Hooks/useItems';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
  const [items] = useOrder();
  return (
    <div className='container'>
      <PageTitle title={"My Products"}></PageTitle>
      <h5>My Products: {items.length}</h5>
      <div className="product-container">
      {
        items.map(item=><MyItem 
        key={items._id}
        item={item}
        ></MyItem>)
      }
      </div>
    </div>
  );
};

export default MyItems;