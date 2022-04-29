import React from 'react';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {
  const [user] = useAuthState(auth); 

  const handleSignOut = () =>{
    signOut(auth); 
  }

  return (
    <div className='container'>
      <h2>Home Page</h2>
      <p>{user?.email}</p>
      {/* <button className='btn btn-primary' onClick={handleSignOut} >logOut</button> */}
    </div>
  );
};

export default Home;