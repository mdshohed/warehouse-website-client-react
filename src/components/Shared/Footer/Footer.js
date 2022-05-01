import React from 'react';
import logo from '../../../images/logos/logo.png'; 
import './Footer.css'


const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className="footer container">
        <div className="d-flex">
          <div className="d-flex text-white"><h5>Electronics-<span className='text-danger'>Warehouse</span> | </h5>
          <p className='mt-1 ms-1'> Developed by ©Enosis Team</p></div>
        </div>
        <div className="d-flex pt-3">
          <div className="me-5">
            <h5 className='text-white'>Warehouse Products</h5>
            <div className="our-service">
            <p><a href="">Computer</a></p>
            <p><a href="">Laptop</a></p>
            <p><a href="">Monitor</a></p>
            <p><a href="">Mouse</a></p>
            <p><a href="">keyboard</a></p>
            <p><a href="">Microphone</a></p>
            </div>
          </div>
          <div className="border-line"></div>
          <div className="ms-5">
            <h5 className='text-white'>Our Help</h5>
            <p className='text-info'>Facebook</p>
            <p className='text-info'>Whatsapp</p>
            <p className='text-info'>Twitter</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;