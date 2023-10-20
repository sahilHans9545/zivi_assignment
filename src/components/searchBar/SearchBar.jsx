import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/images/search.svg";

const SearchBar = ({ setShowTrends = false, setLoadProducts = false }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onFocus={() => {
          if (setShowTrends) {
            setShowTrends(true);
          }
        }}
        onBlur={() => {
          if (setShowTrends) {
            setShowTrends(false);
          }
        }}
        className="bg-white"
      />
      <Link to={search ? `/products/${search}` : ""}>
        <img src={searchIcon} alt="" />
      </Link>
    </div>
  );
};

export default SearchBar;
