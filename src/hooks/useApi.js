import { useState, useEffect } from 'react';
import api from '../api';
import MD5 from 'crypto-js/md5';

const PrivateKey = 'ce49a66e2a5a94deffac5d3cd9ae15a63630adb2';
const PublicKey = 'b37388fcfae95bf1869fe48184712196';
const ts = Number(new Date());
const hash = MD5(ts + PrivateKey + PublicKey);

const useApi = (defaultSearchTerm, URL) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    search(defaultSearchTerm, URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultSearchTerm, URL]);

  const search = async term => {
    try {
      setLoading(true);
      const { data } = await api.get(
        `${URL}=${term}&ts=${ts}&limit=10&hash=${hash}`
      );

      setResults(data.data.results);
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  return [results, loading, search];
};

export default useApi;
