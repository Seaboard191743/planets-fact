import React from 'react';

export const PlanetImage = ({ children }) => {
  return (
    <div className='planet-image-container'>
      <div className='planet-image'>
        {/* <img src={images[infoClass]} alt='planet-img' /> */}
        {children()}
      </div>
    </div>
  );
};
