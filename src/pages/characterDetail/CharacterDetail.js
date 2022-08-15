import React from 'react';

import { useParams, useLocation } from 'react-router-dom';

import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
import styles from './CharacterDetail.module.scss';

const CharacterDetail = () => {
  let params = useParams();
  let { state } = useLocation();
  console.log(params);
  console.log(state);

  // const charList = state.comics.items.map(item => {
  //   return <div>{item.name}</div>;
  // });

  return (
    <ContainerPadding>
      {/* <Link to="/characters">
        <button>Back</button>
      </Link> */}
      <div className={styles.container_character}>
        <div className={styles.img_character_detail}>
          <img
            alt="img_character"
            src={`${state.thumbnail.path}/portrait_uncanny.${state.thumbnail.extension}`}
          />
        </div>
        <div className={styles.character_info}>
          <h1 className={styles.character_name}>{state.name}</h1>
          <h2 className={styles.description}>Description:</h2>
          {state.description === '' ? (
            <p>No description available</p>
          ) : (
            <p>{state.description}</p>
          )}
          {/* <h2>Comic apperances</h2> */}
          {/* {charList} */}
          <div className={styles.links}>
            <a
              alt="link_detail"
              rel="noreferrer"
              href="http://marvel.com/characters/25/hulk?utm_campaign=apiRefutm_source=b37388fcfae95bf1869fe48184712196"
              target="_blank"
            >
              Detail
            </a>
            <a
              alt="link_detail"
              rel="noreferrer"
              href="http://marvel.com/comics/characters/1017098/hulk_has?utm_campaign=apiRefutm_source=b37388fcfae95bf1869fe48184712196"
              target="_blank"
            >
              ComicLink
            </a>
          </div>
        </div>
      </div>
    </ContainerPadding>
  );
};

export default CharacterDetail;
