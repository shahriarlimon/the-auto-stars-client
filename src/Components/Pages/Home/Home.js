import React from 'react';
import Carousel from './Carousel/Carousel';
import Cars from './Carousel/Cars/Cars';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Cars/>
            <Testimonials/>
        </div>
    );
};

export default Home;