import React, { useEffect, useRef } from 'react';
import { CustomLink } from '../customLink/CustomLink';
import { menuItems } from '../../utils/constants';

export const HamburgerMenu = ({ open, handleOpen, width }) => {
  const firstItemRef = useRef(null);
  const secondItemRef = useRef(null);
  const lastItemRef = useRef(null);

  const hamburgerRef = useRef(null);
  console.log(open);
  useEffect(() => {
    const hamburger = hamburgerRef.current;
    if (width > 720) {
      hamburger.style.display = 'none';
    }
    return () => (hamburger.style.display = 'block');
  }, [width]);

  useEffect(() => {
    const firstItem = firstItemRef.current;
    const secondItem = secondItemRef.current;
    const lastItem = lastItemRef.current;
    if (open) {
      firstItem.classList.add('hamburger-item-first-active');
      secondItem.classList.add('hamburger-item-hidden');
      lastItem.classList.add('hamburger-item-last-active');
    } else {
      firstItem.classList.remove('hamburger-item-first-active');
      secondItem.classList.remove('hamburger-item-hidden');
      lastItem.classList.remove('hamburger-item-last-active');
    }
  }, [open]);

  return (
    <>
      <div ref={hamburgerRef} className='hamburger' onClick={handleOpen}>
        <div ref={firstItemRef} className='hamburger-item'></div>
        <div ref={secondItemRef} className='hamburger-item'></div>
        <div ref={lastItemRef} className='hamburger-item'></div>
      </div>
      <div
        className={
          open ? 'hamburger-menu hamburger-menu-active' : 'hamburger-menu'
        }
      >
        {menuItems.map((item) => (
          <div className='hamburger-menu-item' key={item.name}>
            <div
              className='pointer'
              style={{ background: item.selected }}
            ></div>
            <CustomLink to={item.name} onClick={handleOpen}>
              {item.name}
            </CustomLink>
            <p className='path'>&gt;</p>
          </div>
        ))}
      </div>
    </>
  );
};
