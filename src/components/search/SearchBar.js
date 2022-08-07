import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.onSubmit(term);

    setTerm("");
  };

  return (
    <div className="search-bar">
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={term}
          placeholder={props.placeholder}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="btn-search">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
