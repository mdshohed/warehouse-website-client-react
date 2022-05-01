import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'; 
import Delete from '../../../images/logos/delete.png'; 
import useProducts from '../../../Hooks/useProducts';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';


const Product = ({product}) => {
  const {_id, itemName, imgLink, description, price, quantity, supplierName} = product;
  const [products, setProducts] = useProducts(); 
  const navigate = useNavigate(); 
  const [user] = useAuthState(auth); 
  
  const navigateToProductDetails = id =>{
    navigate(`/product/${id}`);  
  }

  const handleProductDelete = (id) =>{
    if(!user) {
      navigate('/login'); 
    }
    if(products.length>5){
      const proceed = window.confirm('Are you sure you want to delete this Product'); 
      if(proceed) {
        const url = `https://salty-escarpment-11127.herokuapp.com/product/${id}`;
        fetch(url,{
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{  
          toast('Successfully deleted'); 
          const remaining = products.filter(product=>product._id !== id);
          setProducts(remaining); 
        })
      } 
    }
    else{
      alert('At least 6 Product will have in warehouse'); 
    }
  }

  return (
    // <tbody>
      <tr>
        <td className='text-center '><img src={imgLink} style={{width:'100px'}} alt="" /></td>
        <td className='text-center '>{itemName}</td>
        <td className='text-center '>{description}</td>
        <td className='text-center '>{price}</td>
        <td className='text-center '>{quantity}</td>
        <td className='text-center '><button className='btn btn-primary' id='custom-btn' onClick={()=>navigateToProductDetails(_id)}>Stock Update</button></td>
        <td className='text-center '><button className='btn btn-danger'  onClick={()=>handleProductDelete(_id)}> <img style={{width:'25px'}} src={Delete} alt="" /> </button></td>
      </tr>
    // </tbody>
  );
};

export default Product;