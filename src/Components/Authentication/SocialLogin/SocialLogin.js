import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {FcGoogle} from 'react-icons/fc'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.config';
import {BiErrorCircle} from 'react-icons/bi';

const SocialLogin = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading,googleError] = useSignInWithGoogle(auth);
    if(googleUser){
        navigate(from, { replace: true });
    }
    return (
        <div>
            <button onClick={()=>signInWithGoogle()} className='px-3 py-1 border rounded flex items-center justify-center'><FcGoogle className='text-xl mr-3'/>Continue with Google</button>
            {
          googleError && <p className="text-red-500 text-xs flex items-center mt-1 ">
          <BiErrorCircle className="mr-1" />{" "}
          <span>{googleError?.message}</span>
        </p>
        }
        </div>
    );
};

export default SocialLogin;