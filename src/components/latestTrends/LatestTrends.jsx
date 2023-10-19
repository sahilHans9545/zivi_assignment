import React, { useState } from "react";
import "./style.scss";
import trend1 from "../../assets/images/trend1.png";
import trend2 from "../../assets/images/trend2.png";
import trend3 from "../../assets/images/trend3.png";
import trend4 from "../../assets/images/trend4.png";
import trend5 from "../../assets/images/trend5.png";

const LatestTrends = () => {
  const [suggestions, setSuggestions] = useState([
    "Striped shirt dress",
    "Satin shirts",
    "Denim jumpsuit",
    "Leather dresses",
    "Solid tshirts",
  ]);

  const [trending, setTrending] = useState([
    {
      url: trend1,
      text: "Shirt with puffed sleeves",
    },
    {
      url: trend2,
      text: "Linen jumpsuit",
    },
    {
      url: trend3,
      text: "White formal suit",
    },
    {
      url: trend4,
      text: "Pattern dresses",
    },
    {
      url: trend5,
      text: "Leather shirt dress",
    },
  ]);

  return (
    <div className="latestTrendsBox bg-white p-4 md:p-10 pb-20 rounded">
      <div className="latestTrends ">
        <p className="text-black text-[21px] font-medium">LatestTrends</p>
        <div className="trendItems mt-6">
          {trending.map((item) => {
            return (
              <div>
                <img src={item.url} alt="" />
                <p className="text-sm mt-[14px]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-black text-[21px] font-medium">
          Popular suggestions
        </p>
        <ul className="list-none flex flex-col gap-3 mt-5">
          {suggestions.map((suggestion) => {
            return <li>{suggestion}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default LatestTrends;
