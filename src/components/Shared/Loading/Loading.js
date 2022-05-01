import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
  return (
    <div>
      <div className="w-100 d-flex justify-content-center align-items-center" style={{height:'300px'}}>
        <div className="d-flex flex-column align-items-center">
          <Spinner className='m-3' animation='border' variant='info'></Spinner>
          <h5>Please wait loading data...</h5>
        </div>
        {/* <div className="loader"></div> */}
      </div>
    </div>
  );
};

export default Loading;