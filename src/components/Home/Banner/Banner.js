import { Carousel } from 'react-bootstrap';
import React from 'react';
import banner1 from '../../../images/banner/banner.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner4.jpg'

const Banner = () => {
  return (
    <div className="">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img style={{height:'500px'}} className="d-block w-100 rounded" src={banner1} alt="First slide"/>
          <Carousel.Caption>
            <h2 className='display-5'>Welcome to our electronic warehouse</h2>
            <h5 className='fw-normal'>We collect best electronic products to delivered for our client </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;