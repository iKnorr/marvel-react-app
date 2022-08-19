import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import api from '../../api';
import MD5 from 'crypto-js/md5';

import ContainerPadding from '../../components/ui/containerPadding/ContainerPadding';
import Spinner from '../../components/ui/spinner/Spinner';
import styles from './ComicDetail.module.scss';

const PrivateKey = 'ce49a66e2a5a94deffac5d3cd9ae15a63630adb2';
const PublicKey = 'b37388fcfae95bf1869fe48184712196';
const ts = Number(new Date());
const hash = MD5(ts + PrivateKey + PublicKey);

const Comic = () => {
  let params = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(
          `/comics/${params.comicsId}?ts=${ts}&hash=${hash}`
        );
        // console.log(data);
        setData(data.data.results);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    getData();
  }, [params.comicsId]);

  console.log(data);
  // const creatorsArray = data.creators.items;

  // const creatorsArray = state.creators.items;
  // const creators = state.creators.items.map(creator => {
  //   const role = creator.role[0].toUpperCase() + creator.role.substr(1);
  //   return (
  //     <div key={creator.name}>
  //       <h2>{role}</h2>
  //       <p>{creator.name}</p>
  //     </div>
  //   );
  // });

  let content = (
    <div className={styles.error_message}>
      <h2>No Results found</h2>
      <p>Try again</p>
    </div>
  );

  if (data.length === 1) {
    const creators = data[0].creators.items.map(creator => {
      const role = creator.role[0].toUpperCase() + creator.role.substr(1);
      return (
        <div key={creator.name}>
          <h2>{role}</h2>
          <p>{creator.name}</p>
        </div>
      );
    });
    content = (
      <div className={styles.container_comic}>
        <img
          className={styles.img_comic}
          src={`${data[0].thumbnail.path}/portrait_uncanny.${data[0].thumbnail.extension}`}
          alt="charc_img"
        ></img>
        <div className={styles.comic_info_wrapper}>
          <h1 className={styles.title}>{data[0].title}</h1>
          <h2>Published:</h2>
          <p>{new Date(data[0].dates[0].date).toLocaleDateString()}</p>
          {/* <p>{data.dates.date}</p> */}
          <div className={styles.creators}>{creators}</div>
        </div>
      </div>
    );
  }

  if (loading) {
    content = (
      <div>
        <Spinner />
        {/* <h2 className={styles.loading}>Loading...</h2>; */}
      </div>
    );
  }

  return (
    <ContainerPadding>
      {content}
      {/* <div className={styles.container_comic}>
        <img
        className={styles.img_comic}
          src={`${state.thumbnail.path}/portrait_uncanny.${state.thumbnail.extension}`}
          alt="charc_img"
        ></img>
        <div className={styles.comic_info_wrapper}>
          <h1 className={styles.title}>{state.title}</h1>
          <h2>Published:</h2>
          <p>{new Date(state.dates[0].date).toLocaleDateString()}</p>
          <div className={styles.creators}>{creators}</div>
        </div>
      </div> */}
    </ContainerPadding>
  );
};

export default Comic;
