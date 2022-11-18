import React from 'react';

export const ErrorBoundary = ({ error, children, ...props }) => {
  if (error) {
    return <h1 className='error'>{error}</h1>;
  }
  return children;
};
