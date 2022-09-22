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

// import React, { useEffect, useState } from 'react';

// // import DisplayContent from '../../components/displayContent/DisplayContent';

// import { useGlobalContext } from '../../context';

// import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import Spinner from '../../components/ui/spinner/Spinner';
// import SearchBar from '../../components/search/SearchBar';
// import api from '../../api';
// import MD5 from 'crypto-js/md5';
// // import styles from './Characters.module.scss';
// import styles from '../../components/displayContent/DisplayContent.module.scss';
// import Header from '../../components/header/Header';

// const PrivateKey = 'ce49a66e2a5a94deffac5d3cd9ae15a63630adb2';
// const PublicKey = 'b37388fcfae95bf1869fe48184712196';
// const ts = Number(new Date());
// const hash = MD5(ts + PrivateKey + PublicKey);

// const Characters = props => {
//   const header = 'MARVEL CHARACTERS';
//   const resultsUrl = '/characters?nameStartsWith';
//   const imgSize = 'standard_fantastic';
//   const defaultDisplay = 'hulk';
//   const pageDirectory = '/characters/';
//   const placeholder = "Enter a Character's name";

//   const [loading, setLoading] = useState(false);
//   // const [results, setResults] = useState([]);
//   const [results, setResults] = useState(() => {
//     const saved = sessionStorage.getItem('responseCharacters');
//     const res = JSON.parse(saved);
//     return res || [];
//   });

//   const data = useGlobalContext();
//   console.log(data);

//   useEffect(() => {
//     sessionStorage.setItem('responseCharacters', JSON.stringify(results));
//   }, [results]);

//   const search = async term => {
//     try {
//       setLoading(true);
//       const { data } = await api.get(
//         `/characters?nameStartsWith=${term}&ts=${ts}&hash=${hash}`
//       );

//       setResults(data.data.results);
//     } catch (error) {
//       console.log(error.response);
//     }
//     setLoading(false);
//   };
//   console.log(results);

//   let contentList = (
//     <div className={styles.error_message}>
//       <h2>No Results found yet</h2>
//       <p>Try by searching for something like Hulk, Spider or Captain</p>
//     </div>
//   );

//   const charactersList = (
//     <div className={styles.main_container}>
//       {results.map(result => {
//         const { id, name, thumbnail } = result;
//         return (
//           <div key={id}>
//             <Link
//               className={styles.result}
//               to={`${pageDirectory}${id}`}
//               state={result}
//             >
//               <div
//                 className={
//                   pageDirectory === '/characters/'
//                     ? styles.img_result
//                     : styles.img_comic
//                 }
//               >
//                 <img
//                   src={`${thumbnail.path}/${imgSize}.${thumbnail.extension}`}
//                   alt="result_img"
//                 ></img>
//               </div>
//               <h2 className={styles.result_name}>
//                 {pageDirectory === '/characters/' ? name : result.title}
//               </h2>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );

//   const loadingDisplay = (
//     <div>
//       <Spinner />
//     </div>
//   );

//   return (
//     <>
//       {/* <DisplayContent
//         header={header}
//         resultsUrl={resultsUrl}
//         imgSize={imgSize}
//         defaultDisplay={defaultDisplay}
//         pageDirectory={pageDirectory}
//         placeholder={placeholder}
//       ></DisplayContent> */}
//       <ContainerPadding>
//         <Header header={header}>
//           <SearchBar onSubmit={search} placeholder="Enter Character" />
//           {/* {content} */}
//           {!loading && results.length > 0 && charactersList}
//           {!loading && results.length === 0 && contentList}
//           {loading && loadingDisplay}
//         </Header>
//       </ContainerPadding>
//     </>
//   );
// };

// export default Characters;
