
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import EmailVerification from "../EmailVerification/EmailVerification";

const RequireAuth = ({children}) => {
  const  [user, loading] = useAuthState(auth); 
  const location = useLocation(); 
  
  
  if(loading) {
    <loading></loading>
  }
  if(loading){
    return <Loading></Loading>
  }
  if(!user){
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  }
  if(user.providerData[0]?.providerId ==='password' && !user.emailVerified){
    return <EmailVerification></EmailVerification>
  }
  return children;
};

export default RequireAuth;