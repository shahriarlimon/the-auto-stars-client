import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/Firebase.config";

const AddItem = () => {
    const [user] = useAuthState(auth)
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    const url = "https://stormy-woodland-63975.herokuapp.com/car";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({...data, email:user?.email}),
      headers: {
          'authorization' :`${user.email} ${localStorage.getItem("accessToken")}`,
          "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result.success);
        reset();
      });
  };
  return (
    <div>
      <form
        className="flex flex-col justify-center items-center w-full bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl my-4">Add Car</h1>
        <input 
         required
          type="text"
          className="border mb-4 px-2 py-1 w-2/3 md:w-1/4"
          placeholder="Name"
          {...register("name")}
        />
        <input
        required
          type="number"
          className="border mb-4 px-2 py-1 w-2/3 md:w-1/4 "
          placeholder="Price"
          {...register("price")}
        />
        <input
        required
          type="number"
          className="border mb-4 px-2 py-1 w-2/3 md:w-1/4"
          placeholder="Quantity"
          {...register("quantity")}
        />
        <input
        readOnly
          type="text"
          className="border mb-4 px-2 py-1 w-2/3 md:w-1/4 "
          value={"Car Production"}
          {...register("supplier")}
        />
        <input
        readOnly
          className="border mb-4 px-2 py-2 w-2/3 md:w-1/4 "
          value={
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          {...register("img")}
        />
        <textarea
        readOnly
          className="border mb-4 px-2 py-4 w-2/3 md:w-1/4 "
          value={
            "BMW is headquartered in Munich and produces motor vehicles in Germany, Brazil, China, India, Mexico, the Netherlands, South Africa, the United Kingdom, and the United States. The Quandt family is a long-term shareholder of the company (with the remaining shares owned by public float), following investments by the brothers Herbert and Harald Quandt in 1959 which saved the company from bankruptcy."
          }
          {...register("description")}
        />
        <input className="border px-3 py-2 w-2/3 md:w-1/4 bg-blue-500 hover:bg-blue-600 text-white" type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
