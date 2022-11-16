import { useState } from 'react';

export const useMenuState = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return { open, handleOpen };
};
