import React, { useState, useEffect } from 'react';

import axios from 'axios';
import MD5 from 'crypto-js/md5';
import { Link } from 'react-router-dom';

import SearchBar from '../search/SearchBar';
import ContainerPadding from '../ui/ContainerPadding';
import './Characters.modules.scss';

const PrivateKey = 'ce49a66e2a5a94deffac5d3cd9ae15a63630adb2';
const PublicKey = 'b37388fcfae95bf1869fe48184712196';
const ts = Number(new Date());
const hash = MD5(ts + PrivateKey + PublicKey);

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://gateway.marvel.com/v1/public/characters?nameStartsWith=hulk&ts=${ts}&limit=10&apikey=${PublicKey}&hash=${hash}`
        );

        console.log(data.data);
        setCharacters(data.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const onSubmitTerm = async term => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${term}&ts=${ts}&limit=10&apikey=${PublicKey}&hash=${hash}`
      );

      setCharacters(data.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading && characters.length === 0) {
    return (
      <ContainerPadding>
        <h2 className="loading">Loading...</h2>
      </ContainerPadding>
    );
  }

  const character = characters.map(character => {
    return (
      <div key={character.id}>
        <Link
          className="link-character"
          to={`/characters/${character.id}`}
          state={character}
        >
          <div
            className="img-character"
            style={{
              backgroundImage: `url(${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension})`,
            }}
          ></div>
          <h2 className="character-name">{character.name}</h2>
        </Link>
      </div>
    );
  });

  const errorMessage = () => {
    return (
      <React.Fragment>
        <h2>No Results found</h2>
        <p>Try again by searching for something like Captain, Spider or Hulk</p>
      </React.Fragment>
    );
  };

  return (
    <ContainerPadding>
      <div className="container">
        <SearchBar
          onSubmit={onSubmitTerm}
          placeholder="Enter a Character Name"
        />
        <div
          className={
            characters.length === 0 ? 'error-message' : 'main-container'
          }
        >
          {/* <div className="main-container"> */}
          {/* {character} */}
          {characters.length === 0 ? errorMessage() : character}
        </div>
      </div>
    </ContainerPadding>
  );
};

export default Characters;
