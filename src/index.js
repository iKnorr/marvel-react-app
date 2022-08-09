import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.module.scss';
import App from './App';
import Characters from './components/characters/Characters';
import Character from './components/character/Character';
import Comics from './components/comics/Comics';
import Comic from './components/comic/Comic';
import Home from './components/home/Home';

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
