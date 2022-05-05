import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCars from "../CustomHook/useCars";

const Inventory = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  useEffect(()=>{
    const url = `http://localhost:5000/car/${id}`;
    fetch(url).then(response=>response.json()).then(data=>setCar(data))
  },[id])

  const handleIncrease = (id) =>{
    const newQuantity = parseInt(car?.quantity) - 1;
    setCar({...car,quantity:newQuantity})
    const url = `http://localhost:5000/car/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
       newQuantity
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }, 
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Delivered!')
      });
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const stockQuantity = e.target.stock.value;
    const newQuantity =
      parseInt(stockQuantity) + parseInt(car?.quantity);
      setCar({...car,quantity:newQuantity})
    const url = `http://localhost:5000/car/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
       newQuantity
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        e.target.reset();
        console.log(data);
      });
  };
  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img
                    className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    alt="hero"
                    src={car?.img}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
              {" "}
              {car?.supplier}{" "}
            </span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              {car?.name}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              {car?.description}
            </p>
            <div className="inline-flex justify-between  w-full">
              <h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600  ">
                ${car?.price}
              </h1>
              <span className=""> Quantity: {car?.quantity}</span>
            </div>
            <div className="flex justify-center">
              <button onClick={()=>handleIncrease(id)}
                type="button"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Deliver
              </button>
            </div>
            <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
              <form
                onSubmit={handleFormSubmit}
                method="post"
                id="revue-form"
                name="revue-form"
                target="_blank"
                className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex"
              >
                <div className="flex-1 min-w-0 revue-form-group">
                  <label for="member_email" className="sr-only">
                    Email address
                  </label>
                  <input
                    name="stock"
                    id="cta-email"
                    type="number"
                    className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter stock number  "
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                  <button
                    type="submit"
                    value="Subscribe"
                    name="member[subscribe]"
                    id="member_submit"
                    className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                  >
                    Stock Now
                  </button>
                </div>
              </form>
              <div className="sm:max-w-lg sm:flex">
                <p className="mt-3 text-xs text-gray-500">
                  By subscribing, you agree with Revue’s
                  <a target="_blank" href="https://www.getrevue.co/terms">
                    Terms of Service
                  </a>
                  and
                  <a target="_blank" href="https://www.getrevue.co/privacy">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
