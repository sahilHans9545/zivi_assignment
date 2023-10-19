import React, { useState } from "react";
import searchIcon from "../../assets/images/search.svg";

const SearchBar = ({ page }) => {
  const [search, setSearch] = useState("");
  return (
    <div className={`searchBar ${page === "home" ? "HomeSearchBar" : ""}`}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white"
      />
      <img src={searchIcon} alt="" />
    </div>
  );
};

export default SearchBar;
