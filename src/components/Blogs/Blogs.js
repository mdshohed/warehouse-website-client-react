import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='container'>
      <PageTitle title={"Blogs"}></PageTitle>
      <div className="">
        <h2 className=' border-bottom'>Electrics Warehouse Blog</h2>
        <div className=" blogs p-4 my-3">
          <h4>Difference between javascript and nodejs?</h4>
          <p><span className='fw-bold'>javascript: </span>Mainly javascript used in frontend development. Javascript is a Scripting language.Basically javascript used on the client-side. It able to add html and DOM </p>
          <p><span className='fw-bold'>nodejs: </span>Nodejs is a server-side language. We can run Javascript outside the browser with the help of NodeJS. Nodejs does not have capability to add html tags.</p>
          
        </div>
        <div className=" blogs p-4 my-3">
          <h4>When should you use nodejs and when should you use mongodb</h4>
          <p>Nodejs is a server side language which uses javascript on the server to develop backend applications. 
            When we need to control database then we use nodejs language for backend system. 
            And mongodb is a database system website where we store documents in a database and perform operations like update, delete or insert. we can easily store our all information in mongodb database. 
            </p>
        </div>
        <div className="blogs p-4 my-3">
          <h4>What is the purpose of jwt and how does it work</h4>
          <p>JWT means json web token. jwt are mainly used for authentication. After a user logging or register in the application, 
            it will crate a json web token and send it back to the user. Subsequent requests by the user will include the JWT. The token tells the server what routes, services, and resources the user is allowed to access.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;