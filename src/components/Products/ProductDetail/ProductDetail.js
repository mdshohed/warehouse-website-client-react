import axios from 'axios';
import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import useProductDetails from '../../../Hooks/useProductDetails';

const ProductDetail = () => {
  const {productId} = useParams();
  const [product,setProduct] = useProductDetails(productId);
  const [user] = useAuthState(auth); 

  let {_id, itemName, imgLink, description, price, quantity, supplierName} = product;

  const handleDelivered = (id) =>{
    quantity = parseInt(quantity) - 1;  
    const updatedProduct = {quantity}; 
    const url = `http://localhost:5000/product/${id}`; 
    fetch(url,{
      method:'PUT', 
      headers:{
        'content-type': 'application/json'
      }, 
      body: JSON.stringify(updatedProduct)
    })
    .then(res=>res.json())
    .then(data=>{
      // toast('Delivered successfully!!!'); 
      setProduct(updatedProduct); 
      // window.location.reload();
    }); 

    const myItem = {
      email: user.email, 
      itemName: itemName, 
      imgLink: imgLink, 
      price: price, 
      quantity: quantity, 
      supplierName: supplierName
    }
    console.log(myItem); 
    axios.post('http://localhost:5000/items', myItem)
    .then(res=>{
      const {data} = res;
      if(data.insertedId){
        toast('Delivered Success!');
      }
    })
  }
  
  const handleRestock = (event) =>{
    event.preventDefault();
    const reStock = event.target.restock.value;  
    if(reStock.match(/^[0-9]+$/)){
      quantity = parseInt(reStock) + parseInt(quantity); 
      const updatedProduct = {
        quantity
      }; 
      const url = `http://localhost:5000/product/${_id}`; 
      fetch(url,{
        method:'PUT', 
        headers:{
          'content-type': 'application/json'
        }, 
        body: JSON.stringify(updatedProduct)
      })
      .then(res=>res.json())
      .then(data=>{
        toast('ReStocked successfully!!!'); 
        setProduct(updatedProduct);
        window.location.reload();
      }); 
       
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
              <input className='w-25 p-1' type="number" name="restock" placeholder='0' />
              <button className='btn btn-danger'>Restock</button>
            </form>
          </div>
        </div>
      </div>
      
      <h5 className='my-5 p-2 bg-primary w-50 mx-auto rounded text-center'><Link className='text-white text-decoration-none' as={Link} to="/product">All Products</Link></h5>
      <ToastContainer />
    </div>
    
  );
};

export default ProductDetail;