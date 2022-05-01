import React, { useRef } from 'react';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import axios from 'axios';
import Loading from '../../../Shared/Loading/Loading';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';

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
    <div className='container w-50 p-5 border rounded'>
      <PageTitle title={"Login"}></PageTitle>
      <h2 style={{color: 'rgb(0, 104, 74)'}} classNamec=''>Log in to your account</h2>
      <form onSubmit={handleSignIn} className='d-flex flex-column '>
        <input ref={emailRef} className='mb-3 p-2' type="text" name="email" id="email" placeholder='Email' required/>
        <input ref={passwordRef} className='mb-3 p-2' type="password" name="password" id="password" placeholder='Password' required/>
        <p className='text-danger'>{error?.message}</p>
        {
          loading && <Spinner className='mx-auto' animation='border' variant='info'></Spinner>
        }
        <input className='mt-3 ' id="custom-btn" type="submit" value="Login" />
      </form>
      <p className='p-2 text-center border my-3'>New to WareHouse? <Link className='text-decoration-none' as={Link} to='/register'>Create an account.</Link></p>
      <p> <Link className='text-decoration-none' as={Link} to='/login'>Forgot Password?</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;