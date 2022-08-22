import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.module.scss';
import App from './App';
import Characters from './pages/characters/Characters';
import Character from './pages/characterDetail/CharacterDetail';
import Comics from './pages/comics/Comics';
import Comic from './pages/comicDetail/ComicDetail';
import Home from './pages/home/Home';
import Series from './pages/series/Series';
import SeriesComic from './pages/seriesDetail/SeriesDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/characters/:characterId" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:comicsId" element={<Comic />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:seriesId" element={<SeriesComic />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '5rem' }}>
                <h1>404 Error 😱</h1>
                <h1>Page not found</h1>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
