import React from "react";
import downArrow from "../assets/images/downArrow.svg";

const FilterHeading = ({ heading }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-medium  uppercase">{heading}</h2>
      <span>
        <img src={downArrow} alt="" />
      </span>
    </div>
  );
};

export default FilterHeading;
