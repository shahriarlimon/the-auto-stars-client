import React, { useEffect, useState } from 'react';

const Cars = () => {
    const [cars,setCars] = useState([]);
    useEffect(()=>{
        const url = 'cars.json';
        fetch(url).then(res=>res.json()).then(data=>setCars(data))
    },[])
    return (
        <div className='my-8'>
            <h1 className='text-2xl text-center'>total cars: {cars?.length}</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    cars?.map(car=><div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                      <a href="#!">
                        <img class="rounded-t-lg" src={car.img} alt=""/>
                      </a>
                      <div class="p-6">
                        <div className='flex justify-between'><h5 class="text-gray-900 text-xl font-medium mb-2">{car.name}</h5>
                        <h5 class="text-gray-900 text-lg font-medium mb-1">Supplier: {car.supplier}</h5></div>
                        <div className='flex justify-between'> <h5 class="text-gray-900 text-lg font-medium mb-1">${car.price}</h5><h5 class="text-gray-900 text-lg font-medium mb-1">Quantity: {car.quantity}</h5>
                        </div>
                        <p class="text-gray-700 text-base mb-4">
                          Some quick example text to build on the card title and make up the bulk of the card's
                          content.
                        </p>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                      </div>
                    </div>
                  </div> )
                }
            </div>
            
        </div>
    );
};

export default Cars;