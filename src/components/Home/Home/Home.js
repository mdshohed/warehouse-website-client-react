import React from 'react';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Home = () => {
  const [user] = useAuthState(auth); 

  const handleSignOut = () =>{
    signOut(auth); 
  }

  return (
    <div className='container'>
      <PageTitle title={"Home"}></PageTitle>
      <h2>Home Page</h2>
      <p>{user?.email}</p>
      {/* <button className='btn btn-primary' onClick={handleSignOut} >logOut</button> */}
    </div>
  );
};

export default Home;