import React from 'react';
import { useForm } from "react-hook-form";


const AddItem = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
              <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
              <input type="text" className='border mb-4 px-2 py-1 ' placeholder='Name' {...register("name")} />
      <input type="number" className='border mb-4 px-2 py-1 ' placeholder='Price' {...register("price")} />
      <input type="number" className='border mb-4 px-2 py-1 ' placeholder='Quantity' {...register("quantity")} />
      <input type="text" className='border mb-4 px-2 py-1 ' value={"Car Production"} {...register("supplier")} />
      <input className='border mb-4 px-2 py-1 ' value={"https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} {...register("img")} />
      <textarea className='border mb-4 px-2 py-1 ' value={"BMW is headquartered in Munich and produces motor vehicles in Germany, Brazil, China, India, Mexico, the Netherlands, South Africa, the United Kingdom, and the United States. The Quandt family is a long-term shareholder of the company (with the remaining shares owned by public float), following investments by the brothers Herbert and Harald Quandt in 1959 which saved the company from bankruptcy."} {...register("description")} />
      <input className='border px-3 py-2' type="submit" />
    </form>
        </div>
    );
};

export default AddItem;