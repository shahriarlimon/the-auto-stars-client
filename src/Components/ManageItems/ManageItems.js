import React from "react";
import useCars from "../CustomHook/useCars";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import useUploadCars from "../CustomHook/useUploadCars";

const ManageItems = () => {
  const [cars, setCars] = useCars();
  const [uploadedCars,setUploadedCars] = useUploadCars();
  const handleCarDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("deleting car with id", id);
      const url = `https://stormy-woodland-63975.herokuapp.com/car/${id}`;
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
            setUploadedCars(uploadRemaining);
          }
        });
    }

   
  };
  return (
    <div className="relaive min-h-screen mt-5">
      <div className="flex justify-end items-center fixed right-0 ">
      <Link to="/addItem" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Item</Link>
      </div>
      <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Car name
                  </th>
                  <th
                    scope="col"
                    className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Supplier
                  </th>
                  <th
                    scope="col"
                    className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    img
                  </th>
                  <th
                    scope="col"
                    className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cars?.map((car) => (
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
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

export default ManageItems;
