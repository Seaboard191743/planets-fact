import React, { useRef, useEffect } from 'react';
import { CustomLink } from '../customLink/CustomLink';
import { menuItems } from '../../utils/constants';

export const Menu = ({ width }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (width < 725) {
      menu.style.display = 'none';
    }
    return () => (menu.style.display = 'flex');
  }, [width]);

  return (
    <div ref={menuRef} className='menu'>
      {menuItems.map((item) => (
        <CustomLink key={item.name} to={item.name} className='menu-item'>
          {item.name}
        </CustomLink>
      ))}
    </div>
  );
};
