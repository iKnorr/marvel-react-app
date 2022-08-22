import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/characters">Character</Link>
        <Link to="/comics">Comics</Link>
        <Link to="/series">Comic-Series</Link>
      </div>
      <div className={styles.data}>Data provided by Marvel. © 2022 MARVEL</div>
    </footer>
  );
};

export default Footer;
