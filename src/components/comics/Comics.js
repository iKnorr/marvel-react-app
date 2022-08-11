import React from 'react';

import DisplayContent from '../displayContent/DisplayContent';

const Comics = () => {
  const header = 'MARVEL COMICS';
  const resultsUrl = '/comics?titleStartsWith';
  const imgSize = 'portrait_uncanny';
  const defaultDisplay = 'avengers';
  const pageDirectory = '/comics/';

  return (
    <DisplayContent
      header={header}
      resultsUrl={resultsUrl}
      imgSize={imgSize}
      defaultDisplay={defaultDisplay}
      pageDirectory={pageDirectory}
    ></DisplayContent>
  );
};

export default Comics;
