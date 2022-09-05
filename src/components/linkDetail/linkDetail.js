import React from 'react';

import styles from './linkDetail.module.scss';

export const marvelLinks = urls => {
  return urls.map(url => {
    return (
      <div className={styles.links} key={url.type}>
        <a alt="link_detail" rel="noreferrer" href={url.url} target="_blank">
          {url.type}
        </a>
      </div>
    );
  });
};
