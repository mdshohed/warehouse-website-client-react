import React, { useRef } from 'react';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import axios from 'axios';
import Loading from '../../../Shared/Loading/Loading';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Login = () => {
  const [user1] = useAuthState(auth); 
  const emailRef = useRef(''); 
  const passwordRef = useRef(''); 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
 
  
  if(user || user1) {
    navigate(from,{replace:true}); 
  }

  const handleSignIn = async event =>{
    event.preventDefault(); 
    const email = emailRef.current.value; 
    const password = passwordRef.current.value;   
    await signInWithEmailAndPassword(email, password);
    const {data} = await axios.post('http://localhost:5000/login', {email}); 
    localStorage.setItem('accessToken', data.accessToken);  
  }

  return (
    <div className='container'>
      <PageTitle title={"Login"}></PageTitle>
      <h2>Login in</h2>
      <form onSubmit={handleSignIn} className='d-flex flex-column '>
        <input ref={emailRef} className='mb-2' type="text" name="email" id="email" placeholder='Email' />
        <input ref={passwordRef} className='mb-2' type="password" name="password" id="password" placeholder='Password'/>
        <p className='text-danger'>{error?.message}</p>
        {
          
          loading && <Spinner className='mx-auto' animation='border' variant='info'></Spinner>
          
        }
        <input className='mt-3' type="submit" value="Login" />
      </form>
      <p>New to Electronics WareHouse? <Link className='text-decoration-none' as={Link} to='/register'>Please Register</Link></p>
    </div>
  );
};

export default Login;