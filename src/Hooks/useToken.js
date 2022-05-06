import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (user) => {
  console.log(user); 
  const [token, setToken] = useState('');
  useEffect(()=>{
    const getToken = async()=>{
      const email = user?.user?.email;
      console.log(email); 
      if(email) {
        const {data} = await axios.post('https://salty-escarpment-11127.herokuapp.com/login', {email})
        setToken(data.accessToken); 
        localStorage.setItem('accessToken', data.accessToken); 
      }
    }
    getToken();
  },[user]); 
  return [token]; 
};

export default useToken;