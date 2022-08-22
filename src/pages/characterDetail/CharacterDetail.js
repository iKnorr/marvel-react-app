import React from 'react';

import { useParams, useLocation } from 'react-router-dom';

import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
import DescriptionDetail from '../../components/descriptionDetail/DescriptionDetail';
import { marvelLinks } from '../../components/linkDetail/linkDetail';
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
      <div className={styles.container_character}>
        <div className={styles.img_character_detail}>
          <img
            alt="img_character"
            src={`${state.thumbnail.path}/portrait_uncanny.${state.thumbnail.extension}`}
          />
        </div>
        <div className={styles.character_info}>
          <h1 className={styles.character_name}>{state.name}</h1>
          <DescriptionDetail description={state.description} />
          {/* <h2>Comic apperances</h2> */}
          {/* {charList} */}
          <div className={styles.links}>{marvelLinks(state.urls)}</div>
        </div>
      </div>
    </ContainerPadding>
  );
};

export default CharacterDetail;
