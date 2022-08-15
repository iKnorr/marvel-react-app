import React from 'react';

import DisplayContent from '../../components/displayContent/DisplayContent';

const Comics = () => {
  const header = 'MARVEL COMICS';
  const resultsUrl = '/comics?titleStartsWith';
  const imgSize = 'portrait_uncanny';
  const defaultDisplay = 'avengers';
  const pageDirectory = '/comics/';
  const placeholder = 'Enter a Comic';

  return (
    <DisplayContent
      header={header}
      resultsUrl={resultsUrl}
      imgSize={imgSize}
      defaultDisplay={defaultDisplay}
      pageDirectory={pageDirectory}
      placeholder={placeholder}
    ></DisplayContent>
  );
};

export default Comics;
