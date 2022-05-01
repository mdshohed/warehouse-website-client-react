import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import google from '../../../../images/social/google.png'; 
import github from '../../../../images/social/github.png'; 
import facebook from '../../../../images/social/facebook1.png'; 
import './SocialLogin.css'

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);  
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);  
  const navigate = useNavigate(); 
  const location = useLocation(); 

  return (
    <div>
       <div className='d-flex align-items-center' >
        <div className="bg-primary w-50" style={{height:'1px'}}>
        </div>
        <p className='mt-2 p-2'>or</p>
        <div className="bg-primary w-50" style={{height:'1px'}}>
        </div>
      </div>
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