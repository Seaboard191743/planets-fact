import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidth);

    return () => window.removeEventListener('resize', handleWidth);
  }, [width]);

  return { width };
};
