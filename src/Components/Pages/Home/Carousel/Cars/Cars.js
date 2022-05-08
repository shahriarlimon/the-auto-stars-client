import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCars from "../../../../CustomHook/useCars";
import Loading from "../../../../Loading/Loading";
import SingleCar from "../../../../SingleCar/SingleCar";

const Cars = () => {
  const [cars,setCars, loading,setLoading] = useCars();
  const navigate = useNavigate();
  /* https://wickedblocks.dev/grids/ */
  if(loading){
    return <Loading/>
  }
  

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <h1 className="text-3xl font-bold leading-none tracking-tighter text-neutral-600 my-4">Our Latest Listings</h1>
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          {cars?.slice(0,6).map((car) => (
            <SingleCar key={car?._id}  car = {car} />
          ))}
        </div>
        
    <div className="flex justify-center items-center my-5 ">
    <button onClick={()=>navigate('/manageItems')} className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    Manage Inventories
    </button>
    </div>
      </div>
    </section>
  );
};

export default Cars;
