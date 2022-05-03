import React from 'react';
import emailIcon from '../../../images/logos/email.png'; 

const Contact = () => {
  return (
    <div className='' style={{background:'#149290'}}>
      <div className="text-center p-5">
        <h3>Get Our warehouse membership</h3>
        <p className='fw-bold'>Submit your email we will contract with you</p>
        <div>
          {/* <img style={{width:'20px'}} src={emailIcon} alt=""/> */}
          <input className='p-2 rounded' placeholder='Email' style={{border: 'none'}}/> <br />
          <button className='btn border-0 rounded btn-danger m-3'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;