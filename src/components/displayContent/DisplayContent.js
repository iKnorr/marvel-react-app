import React, { useEffect } from 'react';

import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';

import Spinner from '../ui/spinner/Spinner';
import styles from './DisplayContent.module.scss';

const DisplayContent = props => {
  const { loading, results, setUrlDetail } = useGlobalContext();

  useEffect(() => {
    setUrlDetail(props.detailUrl);
  }, [props.detailUrl, setUrlDetail]);

  let contentList;

  if (results.length < 1 && !loading) {
    contentList = (
      <div className={styles.error_message}>
        <h2>No Results found</h2>
        <p>
          Try again by searching for something like Amazing, Spider or Captain
        </p>
      </div>
    );
  }

  if (results.length > 0) {
    contentList = (
      <div className={styles.main_container}>
        {results.map(result => {
          return (
            <div key={result.id}>
              <Link
                className={styles.result}
                to={`${props.pageDirectory}${result.id}`}
                state={result}
              >
                <div
                  className={
                    props.pageDirectory === '/characters/'
                      ? styles.img_result
                      : styles.img_comic
                  }
                >
                  <img
                    src={`${result.thumbnail.path}/${props.imgSize}.${result.thumbnail.extension}`}
                    alt="result_img"
                  ></img>
                </div>
                <h2 className={styles.result_name}>
                  {props.pageDirectory === '/characters/'
                    ? result.name
                    : result.title}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }

  let content = contentList;

  if (loading) {
    content = (
      <>
        <Spinner />
      </>
    );
  }

  return <>{content}</>;
};

export default DisplayContent;

// import React from 'react';

// import { Link } from 'react-router-dom';

// import Header from '../header/Header';
// import SearchBar from '../search/SearchBar';
// import ContainerPadding from '../ui/containerPadding/ContainerPadding';
// import styles from './DisplayContent.module.scss';
// import useApi from '../../hooks/useApi';
// import Spinner from '../ui/spinner/Spinner';

// const DisplayContent = props => {
//   const [results, loading, search] = useApi(
//     props.defaultDisplay,
//     props.resultsUrl
//   );

//   // console.log(results);

//   let contentList = (
//     <div className={styles.error_message}>
//       <h2>No Results found</h2>
//       <p>
//         Try again by searching for something like Amazing, Spider or Captain
//       </p>
//     </div>
//   );

//   if (results.length > 0) {
//     contentList = (
//       <div className={styles.main_container}>
//         {results.map(result => {
//           return (
//             <div key={result.id}>
//               <Link
//                 className={styles.result}
//                 to={`${props.pageDirectory}${result.id}`}
//                 state={result}
//               >
//                 <div
//                   className={
//                     props.pageDirectory === '/characters/'
//                       ? styles.img_result
//                       : styles.img_comic
//                   }
//                 >
//                   <img
//                     src={`${result.thumbnail.path}/${props.imgSize}.${result.thumbnail.extension}`}
//                     alt="result_img"
//                   ></img>
//                 </div>
//                 <h2 className={styles.result_name}>
//                   {props.pageDirectory === '/characters/'
//                     ? result.name
//                     : result.title}
//                 </h2>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }

//   let content = contentList;

//   if (loading) {
//     content = (
//       <div>
//         <Spinner />
//       </div>
//     );
//   }

//   return (
//     <ContainerPadding>
//       <Header header={props.header}>
//         <SearchBar onSubmit={search} placeholder={props.placeholder} />
//         {content}
//       </Header>
//     </ContainerPadding>
//   );
// };

// export default DisplayContent;
