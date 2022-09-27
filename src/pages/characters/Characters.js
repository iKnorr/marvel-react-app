import React, { useEffect } from 'react';

import { useGlobalContext } from '../../context';

import DisplayContent from '../../components/displayContent/DisplayContent';
import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
import Header from '../../components/header/Header';
import SearchForm from '../../components/searchForm/SearchForm';
import { motion } from 'framer-motion';

const header = 'MARVEL CHARACTERS';
const detailUrl = '/characters?nameStartsWith';
const imgSize = 'standard_fantastic';
const defaultDisplay = 'hulk';
const pageDirectory = '/characters/';
const placeholder = "Enter a Character's name";

const Characters = () => {
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
        <SearchForm placeholder="Enter a Name" />
        {/* {!loading && results.length > 0 && contentList}
      {!loading && results.length < 1 && error}
    {loading && <Spinner />} */}

        <DisplayContent
          detailUrl={detailUrl}
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

export default Characters;
