import React from 'react';

import styles from './linkDetail.module.scss';

export const marvelLinks = urls => {
  return urls.map((url, index) => {
    return (
      <div className={styles.links}>
        <a
          key={index}
          alt="link_detail"
          rel="noreferrer"
          href={url.url}
          target="_blank"
        >
          {url.type}
        </a>
      </div>
    );
  });
};
