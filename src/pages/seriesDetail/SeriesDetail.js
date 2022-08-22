import React from 'react';

import { useLocation, Link } from 'react-router-dom';

import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
import DescriptionDetail from '../../components/descriptionDetail/DescriptionDetail';
import { marvelLinks } from '../../components/linkDetail/linkDetail';
import styles from './SeriesDetail.module.scss';

const SeriesComic = () => {
  let { state } = useLocation();
  console.log(state);
  const getId = string => {
    return string.split('/')[string.split('/').length - 1];
  };

  const comics = state.comics.items.map((item, index) => {
    return (
      <ul key={index}>
        <li>
          <Link
            to={`/comics/${getId(item.resourceURI)}`}
            className={styles.link_comic}
          >
            {item.name}
          </Link>
        </li>
      </ul>
    );
  });

  // const characters = state.characters.items.map((item, index) => {
  //   return (
  //     <ul>
  //       <li>
  //         <Link to={`/characters/${getId(item.resourceURI)}`}>{item.name}</Link>
  //       </li>
  //     </ul>
  //   );
  // });

  return (
    <ContainerPadding>
      <div className={styles.series_detail_container}>
        <div className={styles.img_series}>
          <img
            alt="img_comic-series"
            src={`${state.thumbnail.path}/standard_fantastic.${state.thumbnail.extension}`}
          />
        </div>
        <div className={styles.series_info}>
          <h1 className={styles.title}>{state.title}</h1>
          <DescriptionDetail description={state.description} />
          <h2 className={styles.comics}>Comics</h2>
          {comics}
          {/* {characters} */}
          <div className={styles.links}>{marvelLinks(state.urls)}</div>
        </div>
      </div>
    </ContainerPadding>
  );
};

export default SeriesComic;
