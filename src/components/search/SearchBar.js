import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa';

import styles from './SearchBar.module.scss';

const SearchBar = props => {
  const [term, setTerm] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();

    props.onSubmit(term);

    setTerm('');
  };

  return (
    <div className={styles.search_bar}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input
          className={styles.input}
          type="text"
          value={term}
          placeholder={props.placeholder}
          autoFocus
          onChange={e => setTerm(e.target.value)}
        />
        <button className={styles.btn_search}>
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
