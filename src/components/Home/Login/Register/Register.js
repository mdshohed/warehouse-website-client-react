import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useToken from '../../../../Hooks/useToken';
import Loading from '../../../Shared/Loading/Loading';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
  const navigate = useNavigate();  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user); 

  if(token) {
    navigate('/'); 
  }

  const handleRegister = async(event)=>{
    event.preventDefault(); 
    const name = event.target.name.value; 
    const email = event.target.email.value; 
    const password = event.target.password.value; 
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  }

  return (
    <div className='container w-50 border rounded p-5'>
      <PageTitle title={"Registration"}></PageTitle>
      <h2 style={{color: 'rgb(0, 104, 74)'}} >Create your account</h2>
      <form onSubmit={handleRegister} className="d-flex flex-column ">
        <input className='mb-3 p-2' type="text" name="name" placeholder='Name' required/>
        <input className='mb-3 p-2' type="email" name="email" placeholder='Email' required/>
        <input className='mb-3 p-2' type="password" name="password" placeholder='Password' id="" required/>
        <p className='text-danger'>{error?.message}</p>
        {
          loading && <Spinner className='mx-auto' animation='border' variant='info'></Spinner>
        }
        <input id="custom-btn" className='mt-3' type="submit" value="Register" />
      </form>
      <p className='p-2 text-center border my-3'>Have an account? <Link className='text-decoration-none' as={Link} to='/login'>Log in now</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;