import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetails from '../../../Hooks/useProductDetails';

const ProductDetail = () => {
  const reStockRef = useRef(''); 
  const {productId} = useParams();
  const [product] = useProductDetails(productId);
  const {_id, itemName, imgLink, description, price, quantity, supplierName} = product;

  const handleDelivered = (id) =>{
    console.log(id); 
  }

  
  const handleRestock = (event) =>{
    event.preventDefault();
    const reStock = event.target.restock.value; 
    console.log(reStock); 
    if(reStock.match(/^[0-9]+$/)){
      console.log(reStock); 
    }
    else {
      alert("Please Give valid Quantity");
    }
  }

  return (
    <div className='container'>
      <div className="row mt-5 align-item-center justify-content-center">
        <div className="col-12 col-md-5 col-lg-5">
          <img src={imgLink} style={{width:'450px'}} alt="" />
        </div>
        <div className="col-12 col-md-5 col-lg-5">
          <h5>{itemName}</h5>
          <p>{description}</p>
          <p><span className='fw-bold'>Supplier: </span>{supplierName}</p>
          <h5><span className='fw-bold'>Price:</span> {price}</h5>
          <h5><span className='fw-bold'>Quantity:</span> {quantity}</h5>
          <button onClick={()=>handleDelivered(_id)} className='my-3' id='custom-btn'>Delivered</button>
          <div className="">
            <h5>Restock Quantity:</h5> <hr />
            <form onSubmit={handleRestock}>
              <input ref={reStockRef} className='w-25 p-1' type="number" name="restock" placeholder='0' />
              <button className='btn btn-danger'>Restock</button>
            </form>
          </div>
        </div>
      </div>
      
      <h5 className='my-5 p-2 bg-primary w-50 mx-auto rounded text-center'><Link className='text-white text-decoration-none' as={Link} to="/product">All Products</Link></h5>
    </div>
  );
};

export default ProductDetail;