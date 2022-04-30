import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'; 
import Delete from '../../../images/logos/trash-2 9.png'; 
import useProducts from '../../../Hooks/useProducts';


const Product = ({product}) => {
  const {_id, itemName, imgLink, description, price, quantity, supplierName} = product;
  const [products, setProducts] = useProducts(); 
  const navigate = useNavigate(); 
  
  const navigateToProductDetails = id =>{
    navigate(`/product/${id}`);  
  }

  const handleProductDelete = (id) =>{
    const proceed = window.confirm('Are you sure you want to delete this Product'); 
    if(proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{  
        const remaining = products.filter(product=>product._id !== id);
        setProducts(remaining); 
      })
    } 
  }

  return (
    <div className='container product-card' >
      <div className="row p-2" style={{height: '300px'}}>
        <div className="col-5 col-md-5 col-lg-5">
          <img style={{width: '200px'}} src={imgLink} alt="" />
        </div>
        <div className="col-7 col-md-7 col-lg-7">
          <h3>{itemName}</h3>
          <p>{description}</p>
          <p><span className='fw-bold'>Price:</span>  {price}</p>
          <p> <span className='fw-bold'>Quantity:</span> {quantity}</p>
          <p><span className='fw-bold'>Supplier Name:</span> {supplierName}</p>
        </div>
      </div>
     <div className="">
      <button className='btn btn-primary mb-2 w-25 me-3' id='custom-btn' onClick={()=>navigateToProductDetails(_id)}>Stock Update</button>
      <button className='btn btn-danger mb-2'  onClick={()=>handleProductDelete(_id)}> <img style={{width:'25px'}} src={Delete} alt="" /> </button>
     </div>
    </div>
  );
};

export default Product;