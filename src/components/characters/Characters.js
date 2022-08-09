import React from 'react';

import { Link } from 'react-router-dom';

import SearchBar from '../search/SearchBar';
import ContainerPadding from '../ui/ContainerPadding';
import styles from './Characters.module.scss';
import useApi from '../../hooks/useApi';

const charactersURL = '/characters?nameStartsWith';

const Characters = () => {
  const [results, loading, search] = useApi('hulk', charactersURL);

  if (loading && results.length === 0) {
    return (
      <ContainerPadding>
        <h2 className={styles.loading}>Loading...</h2>
      </ContainerPadding>
    );
  }

  const content = results.map(character => {
    return (
      <div key={character.id}>
        <Link
          className={styles.link_character}
          to={`/characters/${character.id}`}
          state={character}
        >
          <div
            className={styles.img_character}
            // style={{
            //   backgroundImage: `url(${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension})`,
            // }}
          >
            <img
              src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
              alt="charc_img"
            ></img>
          </div>
          <h2 className={styles.character_name}>{character.name}</h2>
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
      <div className={styles.container}>
        <h2 className={styles.header}>MARVEL CHARACTERS</h2>
        <SearchBar onSubmit={search} placeholder="Enter a Character's Name" />
        <div
          className={`
            ${
              results.length === 0
                ? styles.error_message
                : styles.main_container
            }`}
        >
          {/* {character} */}
          {results.length === 0 ? errorMessage() : content}
        </div>
      </div>
    </ContainerPadding>
  );
};

export default Characters;
