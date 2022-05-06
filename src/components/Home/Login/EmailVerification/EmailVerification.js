import React from 'react';
import auth from '../../../../firebase.init';
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';


const EmailVerification = () => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  return (
    <div className="">
      <div className="text-center">
      <h3 className='text-danger'>Your Email is not verified!!</h3>
      <h5 className='text-success'> please verify</h5>
      <button className='btn btn-primary' onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}>send Verification email Again</button>
      <ToastContainer></ToastContainer>
    </div>
    </div>
  );
};

export default EmailVerification;