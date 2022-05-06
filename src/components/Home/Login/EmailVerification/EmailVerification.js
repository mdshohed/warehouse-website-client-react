import React from 'react';
import auth from '../../../../firebase.init';
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';


const EmailVerification = () => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  return (
    <div className="">
      <div className="text-center mt-5">
      <h3 className='text-'>Your Email is not verified!!</h3>
      <h5 className='text-success'>Please click verification button again</h5>
      <button className='btn btn-danger' onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}>send Again</button>
      <ToastContainer></ToastContainer>
    </div>
    </div>
  );
};

export default EmailVerification;