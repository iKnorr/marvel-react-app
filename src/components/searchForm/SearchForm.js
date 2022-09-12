import React, { useRef } from 'react';

import { useGlobalContext } from '../../context';

import { FaSearch } from 'react-icons/fa';
import styles from './SearchForm.module.scss';

const SearchForm = props => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  const searchContent = () => {
    setSearchTerm(searchValue.current.value);
  };

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <div className={styles.search_bar}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          className={styles.input}
          type="text"
          // autoFocus
          ref={searchValue}
          onChange={searchContent}
          placeholder={props.placeholder}
        />
        <button className={styles.btn_search}>
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
