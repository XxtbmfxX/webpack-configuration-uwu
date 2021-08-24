import { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

const useInitialState = () => {
  const [products, setProducts] = useState([]);
  const cart = [];

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

  return {
    products,
    cart,
  };
};

export default useInitialState;
