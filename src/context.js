import React, { useContext, useEffect, useState, useCallback } from 'react';

import { MD5 } from 'crypto-js';
import axios from 'axios';

const AppContext = React.createContext();

// API data
const baseUrl = 'https://gateway.marvel.com:443/v1/public';
const PrivateKey = 'ce49a66e2a5a94deffac5d3cd9ae15a63630adb2';
const PublicKey = 'b37388fcfae95bf1869fe48184712196';
const ts = Number(new Date());
const hash = MD5(ts + PrivateKey + PublicKey);
const APIKEY = `apikey=${PublicKey}&ts=${ts}&hash=${hash}`;

// Random Defaultcontent on component load
const heroes = [
  'captain',
  'hulk',
  'iron man',
  'deadpool',
  'spider-man',
  'avengers',
  'hawk',
  'thor',
  'loki',
];
const hero = heroes[Math.floor(Math.random() * heroes.length)];

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(hero);
  const [results, setResults] = useState([]);
  const [urlDetail, setUrlDetail] = useState('');
  // const [error, setError] = useState();

  // Fetching API data
  const fetchResults = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseUrl}${urlDetail}=${searchTerm}&limit=10&${APIKEY}`
      );

      const data = response.data.data.results;
      console.log(data);
      if (data) {
        setResults(data);
        setLoading(false);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm, urlDetail]);

  useEffect(() => {
    fetchResults();
  }, [searchTerm, urlDetail, fetchResults]);

  return (
    <AppContext.Provider
      value={{
        results,
        loading,
        searchTerm,
        setSearchTerm,
        setUrlDetail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
