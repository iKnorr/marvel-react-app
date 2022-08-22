import React from 'react';

import DisplayContent from '../../components/displayContent/DisplayContent';

const Series = () => {
  const header = 'MARVEL COMIC-SERIES';
  const resultsUrl = '/series?titleStartsWith';
  const imgSize = 'standard_fantastic';
  const defaultDisplay = 'avengers';
  const pageDirectory = '/series/';
  const placeholder = 'Enter a Comic-Series';

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

export default Series;
