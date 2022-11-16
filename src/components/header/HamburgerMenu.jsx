import React, { useEffect, useRef } from 'react';

export const HamburgerMenu = ({ open, handleOpen, width }) => {
  const firstItemRef = useRef(null);
  const secondItemRef = useRef(null);
  const lastItemRef = useRef(null);

  const hamburgerRef = useRef(null);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    if (width > 900) {
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
    <div ref={hamburgerRef} className='hamburger' onClick={handleOpen}>
      <div ref={firstItemRef} className='hamburger-item'></div>
      <div ref={secondItemRef} className='hamburger-item'></div>
      <div ref={lastItemRef} className='hamburger-item'></div>
    </div>
  );
};
