import React from 'react';

import styles from './Home.module.css';
import ContainerPadding from '../ui/ContainerPadding';

const Home = () => {
  return (
    <ContainerPadding>
      <div className={styles.container}>
        <h1 style={{ fontSize: '4rem' }}>Welcome to iKnorr's MarvelComicDB</h1>
      </div>
    </ContainerPadding>
  );
};

export default Home;
