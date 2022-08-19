import React from 'react';

import { useLocation, Link } from 'react-router-dom';

import ContainerPadding from '../ui/containerPadding/ContainerPadding';

const SeriesComic = props => {
  let { state } = useLocation();

  const getId = string => {
    return string.split('/')[string.split('/').length - 1];
  };

  const comics = state.comics.items.map((item, index) => {
    return (
      <ul key={index}>
        <li>
          <Link to={`/comics/${getId(item.resourceURI)}`}>{item.name}</Link>
        </li>
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
