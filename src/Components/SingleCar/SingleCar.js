import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCar = ({car}) => {
    const navigate = useNavigate();
    return (
        <div class="p-6 relative">
                  <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={car?.img} alt="blog"/>
                  <div class="inline-flex justify-between w-full">
                      <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">{car.name}</h1>
                      <span>{car.supplier}</span>
                  </div>
                  <div class="inline-flex justify-between w-full">
                      <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">$ {car.price}</h1>
                      <span>{car.quantity} piece</span>
                  </div>
                  <p class="mx-auto text-base font-medium leading-relaxed text-gray-500 ">{car.description.slice(0,200)+'...'}</p>
                  <button onClick={()=>navigate(`/inventory/${car._id}`)} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-1/2 absolute bottom-0">Update</button>
              </div>
             
    );
};

export default SingleCar;