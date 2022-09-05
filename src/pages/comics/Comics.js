import React, { useEffect } from 'react';

import { useGlobalContext } from '../../context';

import DisplayContent from '../../components/displayContent/DisplayContent';
import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
import Header from '../../components/header/Header';
import SearchForm from '../../components/searchForm/SearchForm';

const Comics = () => {
  const { setUrlDetail } = useGlobalContext();
  // console.log(results);
  const detailUrl = '/comics?titleStartsWith';

  useEffect(() => {
    setUrlDetail(detailUrl);
  }, [setUrlDetail]);

  const header = 'MARVEL COMICS';
  const resultsUrl = '/comics?titleStartsWith';
  const imgSize = 'portrait_uncanny';
  const defaultDisplay = 'avengers';
  const pageDirectory = '/comics/';
  const placeholder = 'Enter a Comic';

  return (
    <ContainerPadding>
      <Header header={header} />
      <SearchForm placeholder="Enter a Comic Title" />
      <DisplayContent
        header={header}
        resultsUrl={resultsUrl}
        imgSize={imgSize}
        defaultDisplay={defaultDisplay}
        pageDirectory={pageDirectory}
        placeholder={placeholder}
      ></DisplayContent>
    </ContainerPadding>
  );
};

export default Comics;

// import React, { useEffect } from 'react';

// import { useGlobalContext } from '../../context';

// import { Link } from 'react-router-dom';

// import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
// import SearchForm from '../../components/searchForm/SearchForm';
// import Spinner from '../../components/ui/spinner/Spinner';
// import styles from './Comics.module.scss';

// const Comics = () => {
//   const { results, loading, setUrlDetail } = useGlobalContext();
//   console.log(results);
//   const detailUrl = '/comics?titleStartsWith';

//   useEffect(() => {
//     setUrlDetail(detailUrl);
//   }, [setUrlDetail]);

//   const contentList = (
//     <div className={styles.main_container}>
//       {results.map(({ id, title, thumbnail }) => {
//         return (
//           <Link key={id} className={styles.result} to={`/comics/${id}`}>
//             <div className={styles.img_comic}>
//               <img
//                 src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
//                 alt="result_img"
//               ></img>
//             </div>
//             <h2 className={styles.result_name}>{title}</h2>
//           </Link>
//         );
//       })}
//     </div>
//   );

//   const error = (
//     <div>
//       <h2>No Results found yet</h2>
//       <p>Try by searching for something like Hulk, Spider or Captain</p>
//     </div>
//   );

//   return (
//     <ContainerPadding>
//       <SearchForm placeholder="Enter a Comic Title" />
//       {!loading && results.length > 0 && contentList}
//       {!loading && results.length < 1 && error}
//       {loading && <Spinner />}
//     </ContainerPadding>
//   );
// };

// export default Comics;
