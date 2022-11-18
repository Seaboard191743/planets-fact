import { useState, useEffect } from 'react';

export const useFetch = (db, property, item) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const result = db.find((elem) => elem[property].toLowerCase() === item);
        if (!result.name) {
          throw new Error();
        }
        setIsLoading(false);
        setError(null);
        setData(result);
      } catch (error) {
        setIsLoading(false);
        setError('Bad Request');
      }
    }, 1000);
  }, [db, item, property]);

  return { data, isLoading, error };
};
