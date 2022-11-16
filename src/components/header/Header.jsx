import React from 'react';
import { Menu } from './Menu';
import { NavBrand } from './NavBrand';
import { HamburgerMenu } from './HamburgerMenu';

import { useMenuState } from '../../hooks/useMenuState';
import { useWindowSize } from '../../hooks/useWindowSize';

import './header.css';

export const Header = () => {
  const { open, handleOpen } = useMenuState();
  const { width } = useWindowSize();
  const props = { open, handleOpen, width };
  return (
    <>
      <header className='header'>
        <nav className='navigation'>
          <NavBrand />
          <Menu width={width} />
          <HamburgerMenu {...props} />
        </nav>
      </header>
      <div className='header-border'></div>
    </>
  );
};
