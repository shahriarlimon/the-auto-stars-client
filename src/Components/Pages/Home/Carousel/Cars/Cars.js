import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCars from '../../../../CustomHook/useCars';
import SingleCar from '../../../../SingleCar/SingleCar';


const Cars = () => {
  const navigate = useNavigate();
  const [cars] = useCars();
  /* https://wickedblocks.dev/grids/ */
   
    return (<section>
      <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
              {
                cars?.map(car=><SingleCar key={car?._id} car={car}/>)
              }
             
          </div>
      </div>
  </section>
    );
};

export default Cars;