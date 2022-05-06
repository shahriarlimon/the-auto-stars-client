import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.config';
import {AiFillDelete} from 'react-icons/ai'
import useUploadCars from '../CustomHook/useUploadCars';
import useCars from '../CustomHook/useCars';

const MyCars = () => {
 const [uploadedCars,setUploadedCars] = useUploadCars();
 const [cars, setCars] = useCars();
 const handleCarDelete = (id) => {
   const proceed = window.confirm("Are you sure you want to delete?");
   if (proceed) {
     const url = `http://localhost:5000/car/${id}`;
     fetch(url, {
       method: "DELETE",
     })
       .then((response) => response.json())
       .then((data) => {
         if (data.deletedCount > 0) {
           alert("Deleted Successfully!");
           const remaining = cars.filter((car) => car._id !== id);
           const uploadRemaining = uploadedCars.filter(car=>car._id!== id)
           setCars(remaining);
           setUploadedCars(uploadRemaining)
         }
       });
   }
 };

    return (
        <div>
               <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Car name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Supplier
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    img
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {uploadedCars?.map((car) => (
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {car?.name}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {car?.price}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {car?.quantity}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {car?.supplier}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <img className="w-20" src={car?.img} alt="" />
                    </td>
                    <td class="text-xl text-red-400 font-light px-6 py-4 whitespace-nowrap">
                      <button onClick={() => handleCarDelete(car?._id)}>
                        {" "}
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MyCars;