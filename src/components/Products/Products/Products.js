import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Products.css'
import Product from '../Product/Product'
import { Table } from 'react-bootstrap';
import plus from '../../../images/logos/plus 1.png'
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products] = useProducts();
  const navigate = useNavigate(); 
  const navigateToAddItem = () =>{
    navigate('/additem'); 
  }
  return (
    <div className='container'>
      <PageTitle title={"All Products"}></PageTitle>
      <div className="product-title">
        <h3 className='text-info'>ALl warehouse Product list</h3>
        <button onClick={navigateToAddItem} className='btn btn-info me-5'><img className='mb-1' style={{width:'20px'}} src={plus} alt="" />Add Product</button>
      </div>
      <div className="">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className='text-center'>Image</th>
            <th className='text-center'>Name</th>
            <th className='text-center'>Description</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>Quantity</th>
            <th className='text-center'>Update</th>
            <th className='text-center'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product=><Product 
            key={product._id}
            product={product}
            ></Product>)
          }
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default Products;