import React from 'react';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Login = () => {
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if(user) {
    navigate('/'); 
  }

  const handleSignIn = async(event) =>{
    event.preventDefault(); 
    const email = event.target.email.value; 
    const password = event.target.password.value;   
    await signInWithEmailAndPassword(email, password);
  }

  return (
    <div className='container'>
      <PageTitle title={"Login"}></PageTitle>
      <h2>Login in</h2>
      <form onSubmit={handleSignIn} className='d-flex flex-column '>
        <input className='mb-2' type="text" name="email" id="email" placeholder='Email' />
        <input className='mb-2' type="password" name="password" id="password" placeholder='Password'/>
        <p className='text-danger'>{error?.message}</p>
        <input type="submit" value="Login" />
      </form>
      <p>New to Electronics WareHouse? <Link as={Link} to='/register'>Please Register</Link></p>
    </div>
  );
};

export default Login;