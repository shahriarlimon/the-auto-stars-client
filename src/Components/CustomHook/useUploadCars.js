import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.config';

const useUploadCars = () => {
    const [user] = useAuthState(auth);
 const [uploadedCars,setUploadedCars] = useState([])
    useEffect(()=>{
        const url = `https://stormy-woodland-63975.herokuapp.com/uploadedCars`;
        fetch(url,{
           headers: {
               'authorization':`${user.email} ${localStorage.getItem("accessToken")} `
             },
        }).then(res=>res.json()).then(data=>setUploadedCars(data))
    },[user.email])
    return [uploadedCars, setUploadedCars]
};

export default useUploadCars;