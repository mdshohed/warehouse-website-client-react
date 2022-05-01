import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Loading from '../../Shared/Loading/Loading';


const Home = () => {
  const [user] = useAuthState(auth); 



  return (
    <div className='container'>
      <PageTitle title={"Home"}></PageTitle>
      <h2>Home Page</h2>
    </div>
  );
};

export default Home;