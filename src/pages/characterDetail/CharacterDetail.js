import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import api from '../../api';
import MD5 from 'crypto-js/md5';

import DescriptionDetail from '../../components/descriptionDetail/DescriptionDetail';
import Spinner from '../../components/ui/spinner/Spinner';
import { marvelLinks } from '../../components/linkDetail/linkDetail';

import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
import styles from './CharacterDetail.module.scss';

const PrivateKey = 'ce49a66e2a5a94deffac5d3cd9ae15a63630adb2';
const PublicKey = 'b37388fcfae95bf1869fe48184712196';
const ts = Number(new Date());
const hash = MD5(ts + PrivateKey + PublicKey);

const CharacterDetail = () => {
  const { characterId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(
          `/characters/${characterId}?ts=${ts}&hash=${hash}`
        );
        const result = data.data.results;

        console.log(result);
        setData(result);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    getData();
  }, [characterId]);

  if (loading) {
    return <Spinner />;
  }

  let content = (
    <div className={styles.error_message}>
      <h2>No Results found</h2>
      <p>
        Try again by searching for something like Amazing, Spider or Captain
      </p>
    </div>
  );

  if (data.length === 1) {
    content = (
      <>
        <div className={styles.img_character_detail}>
          <img
            alt="img_character"
            src={`${data[0].thumbnail.path}/portrait_uncanny.${data[0].thumbnail.extension}`}
          />
        </div>
        <div className={styles.character_info}>
          <h1 className={styles.character_name}>{data[0].name}</h1>
          <DescriptionDetail description={data[0].description} />
          {/* <h2>Comic apperances</h2> */}
          {/* {charList} */}
          <div className={styles.links}>{marvelLinks(data[0].urls)}</div>
        </div>
      </>
    );
  }

  return (
    <ContainerPadding>
      <div className={styles.container_character}>
        {content}
        {/* {!loading && data.length === 1 && content} */}
        {/* {loading && <Spinner />} */}
      </div>
    </ContainerPadding>
  );
};

export default CharacterDetail;

// import React from 'react';

// import { useParams, useLocation } from 'react-router-dom';

// import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
// import DescriptionDetail from '../../components/descriptionDetail/DescriptionDetail';
// import { marvelLinks } from '../../components/linkDetail/linkDetail';
// import styles from './CharacterDetail.module.scss';

// const CharacterDetail = () => {
//   let params = useParams();
//   let { state } = useLocation();
//   console.log(params);
//   console.log(state);

//   // const charList = state.comics.items.map(item => {
//   //   return <div key={item.name}>{item.name}</div>;
//   // });

//   return (
//     <ContainerPadding>
//       <div className={styles.container_character}>
//         <div className={styles.img_character_detail}>
//           <img
//             alt="img_character"
//             src={`${state.thumbnail.path}/portrait_uncanny.${state.thumbnail.extension}`}
//           />
//         </div>
//         <div className={styles.character_info}>
//           <h1 className={styles.character_name}>{state.name}</h1>
//           <DescriptionDetail description={state.description} />
//           {/* <h2>Comic apperances</h2> */}
//           {/* {charList} */}
//           <div className={styles.links}>{marvelLinks(state.urls)}</div>
//         </div>
//       </div>
//     </ContainerPadding>
//   );
// };

// export default CharacterDetail;
