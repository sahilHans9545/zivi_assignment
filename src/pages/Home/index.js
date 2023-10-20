import React, { useState } from "react";
import Logo from "../../components/logo";
import "./style.scss";
import SearchBar from "../../components/searchBar/SearchBar";
import LatestTrends from "../../components/latestTrends/LatestTrends";

const Home = () => {
  const [showTrends, setShowTrends] = useState(false);
  return (
    <div
      id="homePage"
      className="flex flex-col items-center relative w-full min-h-[100vh] px-5 pb-14 gap-5"
    >
      <Logo />
      <SearchBar setShowTrends={setShowTrends} />
      {showTrends && <LatestTrends />}
    </div>
  );
};

export default Home;
