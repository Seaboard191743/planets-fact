import React from 'react';

export const InfoBtn = ({ className, style, children, handleClick }) => {
  return (
    <button className={className} style={style} onClick={handleClick}>
      {children}
    </button>
  );
};

export const InfoBtnSm = ({ className, style, children, handleClick }) => {
  return (
    <button className={className} style={style} onClick={handleClick}>
      {children}
    </button>
  );
};
