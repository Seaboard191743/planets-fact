import React, { useState, createContext, useContext } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuContextProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <MenuContext.Provider value={{ openMenu, handleOpenMenu }}>
      children
    </MenuContext.Provider>
  );
};
