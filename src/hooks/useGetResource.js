import { useState, useEffect } from 'react';
import GenericServices from './services/services';

export const useGetResource = (BASE_URL, URL) => {

  const genericServices = new GenericServices(BASE_URL);
  const [resource, setResource] = useState([]);

  useEffect(() => {
    getResource(URL);
  }, [URL]);

  // async function to get the resource
  const getResource = async (URL) => {
    const response = await genericServices.get(URL);
    setResource(response.data);
  };

  return resource;
};