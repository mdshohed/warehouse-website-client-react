import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import MyItem from '../MyItem/MyItem';
import {signOut} from 'firebase/auth'; 
// import axiosPrivate from './../../api/axiosPrivate';


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

  return (
    <div className='container'>
      <PageTitle title={"My Products"}></PageTitle>
      <h5>My Products: {items.length}</h5>
      <div className="product-container">
      {
        items.map(item=><MyItem 
        key={item._id}
        item={item}
        ></MyItem>)
      }
      </div>
    </div>
  );
};

export default MyItems;