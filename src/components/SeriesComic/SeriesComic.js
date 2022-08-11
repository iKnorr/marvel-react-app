import axios from 'axios';
import React from 'react';

import { useParams, useLocation, Link } from 'react-router-dom';

import ContainerPadding from '../ui/containerPadding/ContainerPadding';

const SeriesComic = () => {
  let { state } = useLocation();
  let params = useParams();
  console.log(params);
  console.log(state);

  const onClickHandler = async e => {
    console.log(e);
    const resp = await axios.get(
      'https://gateway.marvel.com:443/v1/public/series?titleStartsWith=spider&limit=1&apikey=b37388fcfae95bf1869fe48184712196'
    );
    console.log(resp.data);
  };

  const comics = state.comics.items.map(comic => {
    return (
      <ul key={comic.name}>
        <Link to="/comics" onClick={onClickHandler}>
          <li>{comic.name}</li>
        </Link>
      </ul>
    );
  });

  return (
    <ContainerPadding>
      <div>
        <h1 style={{ color: 'white' }}>Series Comic</h1>
        {state.title}
        <h2>Comics</h2>
        {comics}
      </div>
    </ContainerPadding>
  );
};

export default SeriesComic;
