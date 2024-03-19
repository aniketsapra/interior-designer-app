import React, { useState, useEffect } from 'react';
import { slideshowpics } from '../Assets/Index';
import SlideTransition from '../components/SlideTransition';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
  
      setSelectedImage((prevSelectedImage) => (prevSelectedImage + 1) % slideshowpics.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className='flex flex-col h-screen items-center justify-center'>
      <div>
      <SlideTransition key={selectedImage}>
        {slideshowpics.map((slidepics, key) => (
          <div key={key} style={{ display: key === selectedImage ? 'block' : 'none' }}>
            <img
              src={slidepics.image}
              key={key}
              className='w-[700px] h-[450px]'
              alt={`Slide ${key + 1}`}
            />
          </div>
        ))}
        </SlideTransition>
      </div>
    </div>
    
  );
};

export default Home;
