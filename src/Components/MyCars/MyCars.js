import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.config";
import { AiFillDelete } from "react-icons/ai";
import useUploadCars from "../CustomHook/useUploadCars";
import useCars from "../CustomHook/useCars";

const MyCars = () => {
  const [uploadedCars, setUploadedCars] = useUploadCars();
  const [cars, setCars] = useCars();
  const handleCarDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://stormy-woodland-63975.herokuapp.com/car/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully!");
            const remaining = cars.filter((car) => car._id !== id);
            const uploadRemaining = uploadedCars.filter(
              (car) => car._id !== id
            );
            setCars(remaining);
            setUploadedCars(uploadRemaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Car name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Supplier
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      img
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {uploadedCars?.map((car) => (
                    <tr key={car?._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {car?.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {car?.price}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {car?.quantity}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {car?.supplier}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <img className="w-20" src={car?.img} alt="" />
                      </td>
                      <td className="text-xl text-red-400 font-light px-6 py-4 whitespace-nowrap">
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
