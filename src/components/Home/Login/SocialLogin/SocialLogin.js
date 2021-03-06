import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import google from '../../../../images/social/google.png'; 
import github from '../../../../images/social/github.png'; 
import facebook from '../../../../images/social/facebook.png'; 
import './SocialLogin.css'
import Loading from '../../../Shared/Loading/Loading';
import useToken from '../../../../Hooks/useToken';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);  
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);  
  const [token] = useToken(user || user2);
  const navigate = useNavigate(); 
  const location = useLocation(); 
  let from = location.state?.from?.pathname || '/'; 
  let errorShow; 

  if(loading || loading2) {
    <Loading></Loading>
  }

  if( error || error2) {
    errorShow = <div className=""><p>Error: {error?.message}{error2?.message}</p></div>
  }

  if(token) {
    navigate(from, {replace: true}); 
  }

  if(user || user2) {
    console.log(user); 
    console.log(user2); 
    navigate('/'); 
  }
  return (
    <div>
       <div className='d-flex align-items-center' >
        <div className="bg-primary w-50" style={{height:'1px'}}>
        </div>
        <p className='mt-2 p-2'>or</p>
        <div className="bg-primary w-50" style={{height:'1px'}}>
        </div>
      </div>
      {errorShow}
      <div className="text-center">
        <button className='social-login-btn fw-bold' id='google' onClick={()=>signInWithGoogle()}>
          <img src={google} style={{width: '30px'}} alt="" /> Google
        </button>
        <button className='social-login-btn fw-bold' id='github' onClick={()=>signInWithGithub()}>
          <img src={github} style={{width: '30px'}} alt="" /> Github
        </button>
        <button className='social-login-btn fw-bold' id='facebook' onClick={()=>signInWithGithub()}>
          <img src={facebook} style={{width: '30px'}} alt="" /> Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;