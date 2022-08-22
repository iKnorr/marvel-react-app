import React from 'react';

import styles from './Header.module.scss';

const Header = props => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{props.header}</h2>
      {props.children}
    </div>
  );
};

export default Header;
