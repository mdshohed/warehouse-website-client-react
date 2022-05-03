import { ToastContainer } from "react-bootstrap";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const RequireAuth = ({children}) => {
  const  [user, loading] = useAuthState(auth); 
  const location = useLocation(); 
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  
  if(loading) {
    <loading></loading>
  }
  if(loading){
    return <Loading></Loading>
  }
  if(!user){
    console.log(user); 
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  }
  if(user.providerData[0]?.providerId ==='password' && !user.emailVerified){
    return <div className="text-center">
      <h3 className='text-danger'>Your Email is not verified!!</h3>
      <h5 className='text-success'> please verify</h5>
      <button className='btn btn-primary' onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}>send Verification email Again</button>
      <ToastContainer></ToastContainer>
    </div>
  }
  return children;
};

export default RequireAuth;