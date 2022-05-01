import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BiErrorCircle} from 'react-icons/bi';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.config";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({ emailError: "", passwordError: "" });
  const [createUserWithEmailAndPassword, createUser, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
  const handleInputEmail = (e) => {
      const emailRegex = /\S+@\S+\.\S+/;
      const validEmail = emailRegex.test(e.target.value);
      if(validEmail){
          setUserInfo({...userInfo,email:e.target.value});
          setErrors({...errors,emailError:''})
      }else{
          setUserInfo({...userInfo, email:''});
          setErrors({...errors,emailError:'Invalid Email'})
      }
  };
  const handleInputPassword = (e) => {
      const passwordRegex = /.{6,}/;
      const validPassword = passwordRegex.test(e.target.value);
      if(validPassword){
          setUserInfo({...userInfo, password:e.target.value});
          setErrors({...errors,passwordError:''});
      }else{
          setUserInfo({...userInfo,password:''});
          setErrors({...errors,passwordError:"Minimum 6 characters!"})
      }
  };
  const handleInputConfirmPassword = (e) => {
      if(e.target.value === userInfo.password){
          setUserInfo({...userInfo,confirmPassword:e.target.value});
          setErrors({...errors,passwordError:''})
      }
      else{
          setUserInfo({...userInfo, confirmPassword:''});
          setErrors({...errors, passwordError: "Password didn't match!"});
      }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  if (createUser) {
    navigate("/");
  }
  return (
    <div style={{backgroundImage:`url("https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`}} className="bg-cover hidden md:block w-full my-16">
        <div className=" flex items-center justify-center "> 
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-1/2">
        <form onSubmit={handleOnSubmit}>
          <div class="form-group mb-6">
            <label class="form-label inline-block mb-2 text-gray-700">
              Email address
            </label>
            <input
              required
              onBlur={handleInputEmail}
              type="email"
              class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            {errors?.emailError && (
              <p className="text-red-500 text-xs flex items-center ">
                <BiErrorCircle className="mr-1" />{" "}
                <span>{errors?.emailError}</span>
              </p>
            )}
          </div>
          <div class="form-group mb-6">
            <label class="form-label inline-block mb-2 text-gray-700">
              Password
            </label>
            <input
              required
              onBlur={handleInputPassword}
              type="password"
              class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
            />
            {errors?.passwordError && (
              <p className="text-red-500 text-xs flex items-center ">
                <BiErrorCircle className="mr-1" />{" "}
                <span>{errors?.passwordError}</span>
              </p>
            )}
             
          </div>
          <div class="form-group mb-6">
            <label class="form-label inline-block mb-2 text-gray-700">
              Confirm Password
            </label>
            <input
              required
              onBlur={handleInputConfirmPassword}
              type="password"
              class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder=" Confirm Password"
            />
            
          </div>
         <div>
         {hookError && (
              <p className="text-red-500 text-sm flex items-center justify-center mb-2 ">
                <BiErrorCircle className="mr-1" />{" "}
                <span>{hookError?.message}</span>
              </p>
            )}
         <button
            type="submit"
            class="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
          >
            Register
          </button>
         </div>
          <p class="text-gray-800 mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Login
            </Link>
          </p>
          <div className="flex items-center justify-center my-4">
            <SocialLogin/>
            </div>
        </form>
      </div>
    </div>
     
    </div>
    
  );
};

export default Register;
