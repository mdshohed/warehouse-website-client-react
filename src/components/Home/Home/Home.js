import React from 'react';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import AddItem from '../../Items/AddItem/AddItem';
import Products from '../../Products/Products/Products';

const Home = () => {
  const [user] = useAuthState(auth); 

  const handleSignOut = () =>{
    signOut(auth); 
  }

  return (
    <div className='container'>
      <PageTitle title={"Home"}></PageTitle>
      <h2>Home Page</h2>
      <AddItem></AddItem>
      <Products></Products>
    </div>
  );
};

export default Home;