import React from 'react';

import { useParams, useLocation } from 'react-router-dom';

import ContainerPadding from '../ui/containerPadding/ContainerPadding';
// import Button from '../ui/button/Button';
import styles from './Comic.module.scss';

const Comic = () => {
  let params = useParams();
  let { state } = useLocation();
  console.log(params);
  console.log(state);

  const creatorsArray = state.creators.items;
  const creators = creatorsArray.map(creator => {
    const role = creator.role[0].toUpperCase() + creator.role.substr(1);
    return (
      <div key={creator.name}>
        <h2>{role}</h2>
        <p>{creator.name}</p>
      </div>
    );
  });

  return (
    <ContainerPadding>
      {/* <Link to="/comics">
        <Button title="Back" />
      </Link> */}
      <div className={styles.container_comic}>
        <img
          className={styles.img_comic}
          src={`${state.thumbnail.path}/portrait_uncanny.${state.thumbnail.extension}`}
          alt="charc_img"
        ></img>
        <div className={styles.comic_info_wrapper}>
          <h1 className={styles.title}>{state.title}</h1>
          <h2>Published:</h2>
          <p>{new Date(state.dates[0].date).toLocaleDateString()}</p>
          <p>{state.dates.date}</p>
          <div className={styles.creators}>{creators}</div>
        </div>
      </div>
    </ContainerPadding>
  );
};

export default Comic;
