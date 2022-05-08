import React from 'react';

const Gallery = () => {
    return (
        <section className="overflow-hidden text-gray-700 ">
            <h1 className='text-3xl my-3 font-bold text-center'>Gallery</h1>
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1619362280286-f1f8fd5032ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJtd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1570374910698-6db3d787e6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGx1eHVyeSUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1617431989418-69f8130734a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Gallery;