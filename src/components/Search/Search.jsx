import React from "react";
import "./Search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <form className="search-box">
      <input
        type="text"
        name="search"
        placeholder="Search movies..."
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
      <FontAwesomeIcon
        icon={faSearch}
        color="grey"
        transform=" left-30 down-2 "
        className="fontawesome"
      />
    </form>
  );
};

export default Search;
