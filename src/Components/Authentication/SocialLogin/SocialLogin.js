import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.config";
import { BiErrorCircle } from "react-icons/bi";
import Loading from "../../Loading/Loading";

const SocialLogin = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

    if(googleLoading ){
      return <Loading/>
    }
  if (user) {
    const url = "https://stormy-woodland-63975.herokuapp.com/login";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
          localStorage.setItem("accessToken", data.token)
         navigate(from, { replace: true });
      });
    
  }
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="px-3 py-1 border rounded flex items-center justify-center"
      >
        <FcGoogle className="text-xl mr-3" />
        Continue with Google
      </button>
      {googleError && (
        <p className="text-red-500 text-xs flex items-center mt-1 ">
          <BiErrorCircle className="mr-1" /> <span>{googleError?.message}</span>
        </p>
      )}
    </div>
  );
};

export default SocialLogin;
