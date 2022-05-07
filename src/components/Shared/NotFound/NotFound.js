import React from 'react';
import notFound from '../../../images/logos/error.jpg'

const NotFound = () => {
  return (
    <div className='container text-center'>
      <img src={notFound} className='img-fluid' alt="" />
    </div>
  );
};

export default NotFound;