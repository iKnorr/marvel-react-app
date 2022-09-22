import React, { useEffect } from 'react';

import { useGlobalContext } from '../../context';

import DisplayContent from '../../components/displayContent/DisplayContent';
import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
import Header from '../../components/header/Header';
import SearchForm from '../../components/searchForm/SearchForm';
import { motion } from 'framer-motion';

const header = 'MARVEL COMIC-SERIES';
const detailUrl = '/series?titleStartsWith';
const imgSize = 'standard_fantastic';
const defaultDisplay = 'avengers';
const pageDirectory = '/series/';
const placeholder = 'Enter a Comic-Series';

const Series = () => {
  const { setUrlDetail } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setUrlDetail(detailUrl);
  }, [setUrlDetail]);

  return (
    <ContainerPadding>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Header header={header} />
        <SearchForm placeholder="Enter a Series Title" />
        <DisplayContent
          header={header}
          resultsUrl={detailUrl}
          imgSize={imgSize}
          defaultDisplay={defaultDisplay}
          pageDirectory={pageDirectory}
          placeholder={placeholder}
        ></DisplayContent>
      </motion.div>
    </ContainerPadding>
  );
};

export default Series;
