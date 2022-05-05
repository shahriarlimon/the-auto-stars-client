import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCars from "../../../../CustomHook/useCars";
import SingleCar from "../../../../SingleCar/SingleCar";

const Cars = () => {
  const [cars] = useCars();
  const navigate = useNavigate();
  /* https://wickedblocks.dev/grids/ */

  return (
    <section>
      <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          {cars?.slice(0,6).map((car) => (
            <SingleCar  car = {car} />
          ))}
        </div>
        
    <div className="flex justify-center items-center my-5 ">
    <button onClick={()=>navigate('/manageItems')} class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    Manage Inventories
    </button>
    </div>
      </div>
    </section>
  );
};

export default Cars;
