import React from 'react';

import { Link } from 'react-router-dom';

import ContainerPadding from '../ui/containerPadding/ContainerPadding';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <ContainerPadding>
      <div className={styles.container_home}>
        <div className={styles.wrapper_header}>
          <h1>MarvelComicDB</h1>
          <p>
            Find all the information about{' '}
            <Link to="/characters">Characters</Link> and{' '}
            <Link to="/comics">Comics</Link>
          </p>
        </div>
      </div>
    </ContainerPadding>
  );
};

export default Home;
