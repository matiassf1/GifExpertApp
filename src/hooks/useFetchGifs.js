import { useState, useEffect } from 'react';
import { getSearch } from '../services';

export const useFetchGifs = (categoryName) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const result = await getSearch(categoryName);
    setImages(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
