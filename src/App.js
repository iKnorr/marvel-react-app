import React from 'react';

import { Outlet } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.flex_wrapper}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
