import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Error.module.scss';
import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
import Button from '../../components/ui/button/Button';

const Error = () => {
  return (
    <ContainerPadding>
      <div className={styles.error}>
        <main className={styles.err_msg}>
          <h1>404 Error 😱</h1>
          <h1>Page not found</h1>
        </main>
        <Link to="/">
          <Button title="Back to Home" />
        </Link>
      </div>
    </ContainerPadding>
  );
};

export default Error;
