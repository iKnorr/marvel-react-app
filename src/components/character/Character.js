import React from 'react';

import { Link, useParams, useLocation } from 'react-router-dom';

import ContainerPadding from '../ui/ContainerPadding';

const Character = () => {
  let params = useParams();
  let { state } = useLocation();
  console.log(params);
  console.log(state);
  return (
    <ContainerPadding>
      <h1>{params.characterId}</h1>
      <h2>{state.name}</h2>
      {state.description === '' ? (
        <p>No description available</p>
      ) : (
        <p>{state.description}</p>
      )}
      <Link to="/characters">
        <button>Back</button>
      </Link>
    </ContainerPadding>
  );
};

export default Character;
