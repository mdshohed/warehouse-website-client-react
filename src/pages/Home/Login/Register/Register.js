import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';


const Register = () => {
  const nevigate = useNavigate();  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if(user) {
    nevigate('/'); 
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
    <div className='container w-50'>
      <h2>Sign Up</h2>
      <form onSubmit={handleRegister} className="d-flex flex-column ">
        <input className='mb-2' type="text" name="name" id=""placeholder='Name'  required/>
        <input className='mb-2' type="email" name="email" id="" placeholder='Email' required/>
        <input className='mb-2' type="password" name="password" placeholder='Password' id="" required/>
        <p className='text-danger'>{error?.message}</p>
        <input type="submit" value="Register" />
      </form>
      <p>Already Register? <Link as={Link} to='/login'>Click here</Link></p>
    </div>
  );
};

export default Register;