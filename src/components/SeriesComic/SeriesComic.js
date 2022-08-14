import React from 'react';

import { useParams, useLocation, Link } from 'react-router-dom';

// import api from '../../api';
// import MD5 from 'crypto-js/md5';
import ContainerPadding from '../ui/containerPadding/ContainerPadding';

// const PrivateKey = 'ce49a66e2a5a94deffac5d3cd9ae15a63630adb2';
// const PublicKey = 'b37388fcfae95bf1869fe48184712196';
// const ts = Number(new Date());
// const hash = MD5(ts + PrivateKey + PublicKey);

const SeriesComic = props => {
  let { state } = useLocation();
  let params = useParams();
  console.log(params);
  console.log(state);

  // const getData = async () => {
  //   const resp = await api.get(`/comics?ts=${ts}&hash=${hash}`);
  //   // console.log(resp.data);
  // };
  // getData();

  const getId = string => {
    return string.split('/')[string.split('/').length - 1];
  };

  const comics = state.comics.items.map((item, index) => {
    // console.log(state);
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
