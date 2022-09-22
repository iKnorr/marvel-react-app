import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
import styles from './Home.module.scss';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContainerPadding>
      <motion.div
        className={styles.container_home}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.wrapper_header}>
          <h1>MarvelComicDB</h1>
          <p>
            Find all the information about{' '}
            <Link to="/characters">Characters</Link>,{' '}
            <Link to="/comics">Comics</Link> and{' '}
            <Link to="/series">Comic-Series</Link>
          </p>
        </div>
      </motion.div>
    </ContainerPadding>
  );
};

export default Home;
