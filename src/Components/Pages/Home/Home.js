import React from 'react';
import Carousel from './Carousel/Carousel';
import Cars from './Carousel/Cars/Cars';
import Gallery from './Gallery/Gallery';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Cars/>
            <Testimonials/>
            <Gallery/>
        </div>
    );
};

export default Home;