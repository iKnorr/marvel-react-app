import React from 'react';

import { Link } from 'react-router-dom';

import SearchBar from '../search/SearchBar';
import ContainerPadding from '../ui/ContainerPadding';
import useApi from '../../hooks/useApi';
import styles from './Comics.module.scss';
// https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=the&limit=10&apikey=b37388fcfae95bf1869fe48184712196

const comicsUrl = '/comics?titleStartsWith';

const Comics = () => {
  const [results, loading, search] = useApi('avengers', comicsUrl);

  if (loading && results.length === 0) {
    return (
      <ContainerPadding>
        <h2 className={styles.loading}>Loading...</h2>
      </ContainerPadding>
    );
  }

  const content = results.map(comic => {
    return (
      <div key={comic.id}>
        <Link
          className={styles.link_comic}
          to={`/comics/${comic.id}`}
          state={comic}
        >
          <div
            className={styles.img_comic}
            // style={{
            //   backgroundImage: `url(${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension})`,
            // }}
          >
            <img
              src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
              alt="charc_img"
            ></img>
          </div>
          <h2 className={styles.comic_name}>{comic.title}</h2>
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
        <h2 className={styles.header}>MARVEL COMICS</h2>
        <SearchBar onSubmit={search} placeholder="Enter a Comic" />
        <div
          className={`
            ${
              results.length === 0
                ? styles.error_message
                : styles.main_container
            }`}
        >
          {results.length === 0 ? errorMessage() : content}
        </div>
      </div>
    </ContainerPadding>
  );
};

export default Comics;
