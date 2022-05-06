import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import {signOut} from 'firebase/auth'; 
import { Table } from 'react-bootstrap';
import Delete from '../../../images/logos/delete.png'; 
import { toast } from 'react-toastify';


const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(()=>{
    const getItems = async()=>{
      const email = user?.email; 
      const url = `https://salty-escarpment-11127.herokuapp.com/items?email=${email}`; 
      
      try{
        const {data} = await axios.get(url,{
          headers: {
            authorization: `${localStorage.getItem('accessToken')}`
          }
        });
        setItems(data);
      }
      catch(error){
        if(error.response.status===401 || error.response.status===403){
          signOut(auth); 
          Navigate('/login'); 
        }
      }
    }
    getItems(); 
  },[user]); 

  const handleItemDelete = async(id) =>{
    const proceed = window.confirm('Are you sure you want to delete this Product'); 
    if(proceed) {
      const url = `https://salty-escarpment-11127.herokuapp.com/items/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{  
        const remaining =  items.filter(item=>item._id !== id);
        setItems(remaining); 
        toast('Successfully deleted'); 
      })
    }  
  }

  return (
    <div className='container'>
      <PageTitle title={"My Products"}></PageTitle>
      <h3 className='mt-5'>Delivered Product List</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className='text-center'>Image</th>
            <th className='text-center'>Name</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>Supplier</th>
            <th className='text-center'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item=>
            <tr>
              <td className='text-center'><img src={item.imgLink} style={{width:'100px'}} alt="" /></td>
              <td className='text-center'>{item.itemName}</td>
              <td className='text-center'>{item.price}</td>
              <td className='text-center'>{item.supplierName}</td>
              <td className='text-center'> <button className='btn btn-danger px-3'  onClick={()=>handleItemDelete(item._id)}> <img style={{width:'25px'}} src={Delete} alt="" /> </button></td>
            </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;
