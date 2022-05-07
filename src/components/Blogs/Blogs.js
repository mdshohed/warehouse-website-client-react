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
          <h3 className='text-danger'>Difference between javascript and nodejs?</h3>
          <h5><span className='fw-bold'>javascript: </span>Mainly javascript used in frontend development. Javascript is a Scripting language.Basically javascript used on the client-side. It able to add html and DOM </h5>
          <h5><span className='fw-bold'>nodejs: </span>Nodejs is a server-side language. We can run Javascript outside the browser with the help of NodeJS. Nodejs does not have capability to add html tags.</h5>
          
        </div>
        <div className=" blogs p-4 my-3">
          <h3 className='text-danger'>When should you use nodejs and when should you use mongodb</h3>
          <h5>Nodejs is a server side language which uses javascript on the server to develop backend applications. 
            When we need to control database then we use nodejs language for backend system. 
            And mongodb is a database system website where we store documents in a database and perform operations like update, delete or insert. we can easily store our all information in mongodb database. 
            </h5>
        </div>
        <div className="blogs p-4 my-3">
          <h3 className='text-danger'>Differences between sql and nosql databases.</h3>
          <h5>Sql databases are table-based, It better for multi-row transactions and SQL databases are vertically scalable.
            On the other hand, NoSQL databases are document,key-value, graph, or wide-column stores.
            NoSQL database is better for unstructured data like documents or JSON and NoSQL databases horizontally scalable.
          </h5>
        </div>
        <div className="blogs p-4 my-3">
          <h3 className='text-danger'>What is the purpose of jwt and how does it work</h3>
          <h5>JWT means json web token. jwt are mainly used for authentication. After a user logging or register in the application, 
            it will crate a json web token and send it back to the user. Subsequent requests by the user will include the JWT. The token tells the server what routes, services, and resources the user is allowed to access.</h5>
        </div>
      </div>
    </div>
  );
};

export default Blogs;