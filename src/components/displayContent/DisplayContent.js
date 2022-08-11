import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../ui/header/Header';
import SearchBar from '../search/SearchBar';
import ContainerPadding from '../ui/containerPadding/ContainerPadding';
import styles from './DisplayContent.module.scss';
import useApi from '../../hooks/useApi';

const DisplayContent = props => {
  const [results, loading, search] = useApi(
    props.defaultDisplay,
    props.resultsUrl
  );

  let contentList = (
    <div className={styles.error_message}>
      <h2>No Results found</h2>
      <p>Try again by searching for something like Captain, Spider or Hulk</p>
    </div>
  );

  if (results.length > 0) {
    contentList = (
      <div className={styles.main_container}>
        {results.map(result => {
          return (
            <div key={result.id}>
              <Link
                className={styles.result}
                to={`${props.pageDirectory}${result.id}`}
                state={result}
              >
                <div
                  className={
                    props.pageDirectory === '/comics/'
                      ? styles.img_comic
                      : styles.img_result
                  }
                >
                  <img
                    src={`${result.thumbnail.path}/${props.imgSize}.${result.thumbnail.extension}`}
                    alt="result_img"
                  ></img>
                </div>
                <h2 className={styles.result_name}>
                  {props.pageDirectory === '/comics/'
                    ? result.title
                    : result.name}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }

  let content = contentList;

  if (loading) {
    content = <h2 className={styles.loading}>Loading...</h2>;
  }

  return (
    <ContainerPadding>
      <Header header={props.header}>
        <SearchBar onSubmit={search} placeholder="Enter a Character's Name" />
        {content}
      </Header>
    </ContainerPadding>
  );
};

export default DisplayContent;
