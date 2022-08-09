import React from 'react';

import { Link, useParams, useLocation } from 'react-router-dom';

import ContainerPadding from '../ui/ContainerPadding';
const Comic = () => {
  let params = useParams();
  let { state } = useLocation();
  console.log(params);
  console.log(state);
  return (
    <ContainerPadding>
      <h1>{params.comicId}</h1>
      <h2>{state.title}</h2>
      <p>Pages: {state.pageCount}</p>
      {state.description === '' ? (
        <p>No description available</p>
      ) : (
        <p>{state.description}</p>
      )}
      <Link to="/comics">
        <button>Back</button>
      </Link>
    </ContainerPadding>
  );
};

export default Comic;
