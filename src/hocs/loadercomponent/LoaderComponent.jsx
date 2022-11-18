import React from 'react';

export const LoaderComponent = ({ isLoading, children, ...props }) => {
  if (isLoading) {
    return <div className='loader'></div>;
  }
  return children;
};
