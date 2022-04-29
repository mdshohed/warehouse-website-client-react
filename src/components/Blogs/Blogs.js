import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='container'>
      <PageTitle title={"Blogs"}></PageTitle>
      <div className="">
        <h2 className=' border-bottom'>Electrics Warehouse Feature Blog</h2>
        <div className=" blogs p-4 my-3">
          <h4>Difference between javascript and nodejs?</h4>
          <p><span className='fw-bold'>javascript: </span>Authorization determines what resources a user can access. Authorization isn’t visible to or changeable by the user. Authorization always takes place after authentication.</p>
          <p><span className='fw-bold'>nodejs: </span>Authentication verifies who the user is and an Authentication is visible to and partially changeable by the user.Authentication is the first step of a good identity and access management process.</p>
          
        </div>
        <div className=" blogs p-4 my-3">
          <h4>When should you use nodejs and when should you use mongodb</h4>
          <p>Firebase Authentication provides backend services where we can login or register by our email, facebook, github, and so on. </p>
        </div>
        <div className=" blogs p-4 my-3">
          <h4>Differences between sql and nosql databases.</h4>
          <p>Firebase provide best authentication service. Also, there are many service which firebase provides, most useful of them are firebase database, realtime database, storage drive, hosting, Cloud Messaging, and so no. we can create custom hosting name my mine. for this firebase takes some cost. </p>
        </div>
        <div className="blogs p-4 my-3">
          <h4>What is the purpose of jwt and how does it work</h4>
          <p>Firebase provide best authentication service. Also, there are many service which firebase provides, most useful of them are firebase database, realtime database, storage drive, hosting, Cloud Messaging, and so no. we can create custom hosting name my mine. for this firebase takes some cost. </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;