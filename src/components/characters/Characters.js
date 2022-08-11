import React from 'react';

import DisplayContent from '../displayContent/DisplayContent';

const Characters = () => {
  const header = 'MARVEL CHARACTERS';
  const resultsUrl = '/characters?nameStartsWith';
  const imgSize = 'standard_fantastic';
  const defaultDisplay = 'hulk';
  const pageDirectory = '/characters/';

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

export default Characters;
