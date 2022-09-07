import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Error from './pages/error/Error';
import Characters from './pages/characters/Characters';
import Character from './pages/characterDetail/CharacterDetail';
import Comics from './pages/comics/Comics';
import Comic from './pages/comicDetail/ComicDetail';
import Home from './pages/home/Home';
import Series from './pages/series/Series';
import SeriesComic from './pages/seriesDetail/SeriesDetail';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.flex_wrapper}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="/characters/" element={<Characters />}></Route>
          <Route path="/characters/:characterId" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:comicsId" element={<Comic />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:seriesId" element={<SeriesComic />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
