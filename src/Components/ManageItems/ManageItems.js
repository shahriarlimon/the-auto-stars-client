import React from "react";
import useCars from "../CustomHook/useCars";
import { AiFillDelete } from "react-icons/ai";

const ManageItems = () => {
  const [cars, setCars] = useCars();
  const handleCarDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("deleting car with id", id);
      const url = `http://localhost:5000/car/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.deletedCount > 0){
            alert('Deleted Successfully!');
            const remaining = cars.filter(car=>car._id !== id);
            setCars(remaining);
          }
        });
    }
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Car
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Quantity
            </th>
            <th scope="col" class="px-6 py-3">
              Supplier
            </th>
            <th scope="col" class="px-6 py-3">
              Image
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {cars?.map((car) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {car?.name}
              </th>
              <td class="px-6 py-4">{car?.price}</td>
              <td class="px-6 py-4">{car?.quantity}</td>
              <td class="px-6 py-4">{car?.supplier}</td>
              <td class="px-6 py-4">
                <img className="w-20" src={car?.img} alt="" />
              </td>
              <td class="px-6 py-4 text-right">
                <button onClick={() => handleCarDelete(car?._id)}>
                  <AiFillDelete className="text-xl text-red-400" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageItems;
