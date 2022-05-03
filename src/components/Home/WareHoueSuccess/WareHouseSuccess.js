import React from 'react';
import profits from '../../../images/success/profits.png';
import member from '../../../images/success/members.png';
import delivered from '../../../images/success/delivery-truck.png';
import CountUp from 'react-countup';
import './WareHouseSuccess.css'

const WareHouseSuccess = () => {
  return (
    <div style={{background: '#025b74'}}>
      <div className="container">
        <h2 className='text-center text-white pt-4'>WE REACHED</h2>
        <div className="success">
          <div className="success-card border rounded"> 
            <div className="">
              <div className="text-center">
                <img style={{width:'70px'}} src={profits} alt="" />
              </div>
              <div className="success-number">
                <h4 className=''>$<CountUp duration={3} end={234323} />+</h4> 
                <h5>Total Profits</h5>
              </div>
            </div>
          </div>
          <div className="success-card border rounded">
            <div className="">
              <div className="text-center">
                <img style={{width:'70px'}} src={member} alt="" />
              </div>
              <div className="success-number">
                <h4 className=''>$<CountUp duration={3} end={100} />+</h4> 
                <h5>Membership</h5>
              </div>
            </div>
          </div>
          <div className="success-card border rounded">
            <div className="">
              <div className="text-center">
                <img style={{width:'70px'}} src={delivered} alt="" />
              </div>
              <div className="success-number">
                <h4 className=''>$<CountUp duration={3} end={36000} />+</h4> 
                <h5>Successfully delivered</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    
    </div>
  );
};

export default WareHouseSuccess;