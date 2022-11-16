import React from 'react';
import { Link, useMatch } from 'react-router-dom';

export const CustomLink = ({ to, className, children, ...props }) => {
  const match = useMatch(to);
  const customClassName = match ? `${className} menu-item-active` : className;
  return (
    <Link to={to} className={customClassName}>
      {children}
    </Link>
  );
};
