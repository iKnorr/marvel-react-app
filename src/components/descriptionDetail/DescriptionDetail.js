import React from 'react';

import styles from './DescriptionDetail.module.scss';

const DescriptionDetail = props => {
  return (
    <div className={styles.description_container}>
      <h2 className={styles.description}>Description:</h2>
      {props.description === '' || props.description === null ? (
        <p>No description available</p>
      ) : (
        <p>{props.description}</p>
      )}
    </div>
  );
};

export default DescriptionDetail;
